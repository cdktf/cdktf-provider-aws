# `elasticBeanstalkApplication` Submodule <a name="`elasticBeanstalkApplication` Submodule" id="@cdktf/provider-aws.elasticBeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkApplication <a name="ElasticBeanstalkApplication" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application aws_elastic_beanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkApplication(Construct Scope, string Id, ElasticBeanstalkApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig">ElasticBeanstalkApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig">ElasticBeanstalkApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle">PutAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle">ResetAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAppversionLifecycle` <a name="PutAppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle"></a>

```csharp
private void PutAppversionLifecycle(ElasticBeanstalkApplicationAppversionLifecycle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---

##### `ResetAppversionLifecycle` <a name="ResetAppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle"></a>

```csharp
private void ResetAppversionLifecycle()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle">AppversionLifecycle</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput">AppversionLifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppversionLifecycle`<sup>Required</sup> <a name="AppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle"></a>

```csharp
public ElasticBeanstalkApplicationAppversionLifecycleOutputReference AppversionLifecycle { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AppversionLifecycleInput`<sup>Optional</sup> <a name="AppversionLifecycleInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput"></a>

```csharp
public ElasticBeanstalkApplicationAppversionLifecycle AppversionLifecycleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationAppversionLifecycle <a name="ElasticBeanstalkApplicationAppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkApplicationAppversionLifecycle {
    string ServiceRole,
    object DeleteSourceFromS3 = null,
    double MaxAgeInDays = null,
    double MaxCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole">ServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays">MaxAgeInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount">MaxCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}. |

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole"></a>

```csharp
public string ServiceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}.

---

##### `DeleteSourceFromS3`<sup>Optional</sup> <a name="DeleteSourceFromS3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3"></a>

```csharp
public object DeleteSourceFromS3 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}.

---

##### `MaxAgeInDays`<sup>Optional</sup> <a name="MaxAgeInDays" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays"></a>

```csharp
public double MaxAgeInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}.

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount"></a>

```csharp
public double MaxCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}.

---

### ElasticBeanstalkApplicationConfig <a name="ElasticBeanstalkApplicationConfig" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkApplicationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ElasticBeanstalkApplicationAppversionLifecycle AppversionLifecycle = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle">AppversionLifecycle</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | appversion_lifecycle block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}.

---

##### `AppversionLifecycle`<sup>Optional</sup> <a name="AppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle"></a>

```csharp
public ElasticBeanstalkApplicationAppversionLifecycle AppversionLifecycle { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

appversion_lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkApplicationAppversionLifecycleOutputReference <a name="ElasticBeanstalkApplicationAppversionLifecycleOutputReference" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkApplicationAppversionLifecycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3">ResetDeleteSourceFromS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays">ResetMaxAgeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount">ResetMaxCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteSourceFromS3` <a name="ResetDeleteSourceFromS3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3"></a>

```csharp
private void ResetDeleteSourceFromS3()
```

##### `ResetMaxAgeInDays` <a name="ResetMaxAgeInDays" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays"></a>

```csharp
private void ResetMaxAgeInDays()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount"></a>

```csharp
private void ResetMaxCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input">DeleteSourceFromS3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput">MaxAgeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput">MaxCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays">MaxAgeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount">MaxCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteSourceFromS3Input`<sup>Optional</sup> <a name="DeleteSourceFromS3Input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input"></a>

```csharp
public object DeleteSourceFromS3Input { get; }
```

- *Type:* object

---

##### `MaxAgeInDaysInput`<sup>Optional</sup> <a name="MaxAgeInDaysInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput"></a>

```csharp
public double MaxAgeInDaysInput { get; }
```

- *Type:* double

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput"></a>

```csharp
public double MaxCountInput { get; }
```

- *Type:* double

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput"></a>

```csharp
public string ServiceRoleInput { get; }
```

- *Type:* string

---

##### `DeleteSourceFromS3`<sup>Required</sup> <a name="DeleteSourceFromS3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3"></a>

```csharp
public object DeleteSourceFromS3 { get; }
```

- *Type:* object

---

##### `MaxAgeInDays`<sup>Required</sup> <a name="MaxAgeInDays" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays"></a>

```csharp
public double MaxAgeInDays { get; }
```

- *Type:* double

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount"></a>

```csharp
public double MaxCount { get; }
```

- *Type:* double

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue"></a>

```csharp
public ElasticBeanstalkApplicationAppversionLifecycle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---



