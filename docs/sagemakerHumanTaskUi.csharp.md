# `sagemakerHumanTaskUi` Submodule <a name="`sagemakerHumanTaskUi` Submodule" id="@cdktf/provider-aws.sagemakerHumanTaskUi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerHumanTaskUi <a name="SagemakerHumanTaskUi" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui aws_sagemaker_human_task_ui}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerHumanTaskUi(Construct Scope, string Id, SagemakerHumanTaskUiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig">SagemakerHumanTaskUiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig">SagemakerHumanTaskUiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate">PutUiTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutUiTemplate` <a name="PutUiTemplate" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate"></a>

```csharp
private void PutUiTemplate(SagemakerHumanTaskUiUiTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerHumanTaskUi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerHumanTaskUi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerHumanTaskUi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate">UiTemplate</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput">HumanTaskUiNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput">UiTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName">HumanTaskUiName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `UiTemplate`<sup>Required</sup> <a name="UiTemplate" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate"></a>

```csharp
public SagemakerHumanTaskUiUiTemplateOutputReference UiTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a>

---

##### `HumanTaskUiNameInput`<sup>Optional</sup> <a name="HumanTaskUiNameInput" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput"></a>

```csharp
public string HumanTaskUiNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UiTemplateInput`<sup>Optional</sup> <a name="UiTemplateInput" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput"></a>

```csharp
public SagemakerHumanTaskUiUiTemplate UiTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---

##### `HumanTaskUiName`<sup>Required</sup> <a name="HumanTaskUiName" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName"></a>

```csharp
public string HumanTaskUiName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerHumanTaskUiConfig <a name="SagemakerHumanTaskUiConfig" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerHumanTaskUiConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HumanTaskUiName,
    SagemakerHumanTaskUiUiTemplate UiTemplate,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName">HumanTaskUiName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate">UiTemplate</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | ui_template block. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HumanTaskUiName`<sup>Required</sup> <a name="HumanTaskUiName" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName"></a>

```csharp
public string HumanTaskUiName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}.

---

##### `UiTemplate`<sup>Required</sup> <a name="UiTemplate" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate"></a>

```csharp
public SagemakerHumanTaskUiUiTemplate UiTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

ui_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}.

---

### SagemakerHumanTaskUiUiTemplate <a name="SagemakerHumanTaskUiUiTemplate" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerHumanTaskUiUiTemplate {
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerHumanTaskUiUiTemplateOutputReference <a name="SagemakerHumanTaskUiUiTemplateOutputReference" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerHumanTaskUiUiTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentSha256">ContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue"></a>

```csharp
public SagemakerHumanTaskUiUiTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---



