# `sagemakerStudioLifecycleConfig` Submodule <a name="`sagemakerStudioLifecycleConfig` Submodule" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerStudioLifecycleConfig <a name="SagemakerStudioLifecycleConfig" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerStudioLifecycleConfig(Construct Scope, string Id, SagemakerStudioLifecycleConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig">SagemakerStudioLifecycleConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig">SagemakerStudioLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerStudioLifecycleConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerStudioLifecycleConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerStudioLifecycleConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput">StudioLifecycleConfigAppTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput">StudioLifecycleConfigContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput">StudioLifecycleConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType">StudioLifecycleConfigAppType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent">StudioLifecycleConfigContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName">StudioLifecycleConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StudioLifecycleConfigAppTypeInput`<sup>Optional</sup> <a name="StudioLifecycleConfigAppTypeInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput"></a>

```csharp
public string StudioLifecycleConfigAppTypeInput { get; }
```

- *Type:* string

---

##### `StudioLifecycleConfigContentInput`<sup>Optional</sup> <a name="StudioLifecycleConfigContentInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput"></a>

```csharp
public string StudioLifecycleConfigContentInput { get; }
```

- *Type:* string

---

##### `StudioLifecycleConfigNameInput`<sup>Optional</sup> <a name="StudioLifecycleConfigNameInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput"></a>

```csharp
public string StudioLifecycleConfigNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StudioLifecycleConfigAppType`<sup>Required</sup> <a name="StudioLifecycleConfigAppType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType"></a>

```csharp
public string StudioLifecycleConfigAppType { get; }
```

- *Type:* string

---

##### `StudioLifecycleConfigContent`<sup>Required</sup> <a name="StudioLifecycleConfigContent" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent"></a>

```csharp
public string StudioLifecycleConfigContent { get; }
```

- *Type:* string

---

##### `StudioLifecycleConfigName`<sup>Required</sup> <a name="StudioLifecycleConfigName" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName"></a>

```csharp
public string StudioLifecycleConfigName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerStudioLifecycleConfigConfig <a name="SagemakerStudioLifecycleConfigConfig" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerStudioLifecycleConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StudioLifecycleConfigAppType,
    string StudioLifecycleConfigContent,
    string StudioLifecycleConfigName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType">StudioLifecycleConfigAppType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent">StudioLifecycleConfigContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName">StudioLifecycleConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StudioLifecycleConfigAppType`<sup>Required</sup> <a name="StudioLifecycleConfigAppType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType"></a>

```csharp
public string StudioLifecycleConfigAppType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}.

---

##### `StudioLifecycleConfigContent`<sup>Required</sup> <a name="StudioLifecycleConfigContent" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent"></a>

```csharp
public string StudioLifecycleConfigContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}.

---

##### `StudioLifecycleConfigName`<sup>Required</sup> <a name="StudioLifecycleConfigName" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName"></a>

```csharp
public string StudioLifecycleConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}.

---



