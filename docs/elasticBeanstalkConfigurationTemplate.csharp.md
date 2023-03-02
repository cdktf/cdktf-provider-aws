# `elasticBeanstalkConfigurationTemplate` Submodule <a name="`elasticBeanstalkConfigurationTemplate` Submodule" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkConfigurationTemplate <a name="ElasticBeanstalkConfigurationTemplate" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template aws_elastic_beanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkConfigurationTemplate(Construct Scope, string Id, ElasticBeanstalkConfigurationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig">ElasticBeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig">ElasticBeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting">PutSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting">ResetSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName">ResetSolutionStackName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSetting` <a name="PutSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting"></a>

```csharp
private void PutSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```csharp
private void ResetEnvironmentId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSetting` <a name="ResetSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting"></a>

```csharp
private void ResetSetting()
```

##### `ResetSolutionStackName` <a name="ResetSolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```csharp
private void ResetSolutionStackName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkConfigurationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkConfigurationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkConfigurationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting">Setting</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput">SettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput">SolutionStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting"></a>

```csharp
public ElasticBeanstalkConfigurationTemplateSettingList Setting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a>

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput"></a>

```csharp
public object SettingInput { get; }
```

- *Type:* object

---

##### `SolutionStackNameInput`<sup>Optional</sup> <a name="SolutionStackNameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```csharp
public string SolutionStackNameInput { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkConfigurationTemplateConfig <a name="ElasticBeanstalkConfigurationTemplateConfig" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkConfigurationTemplateConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Application,
    string Name,
    string Description = null,
    string EnvironmentId = null,
    string Id = null,
    object Setting = null,
    string SolutionStackName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application">Application</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting">Setting</a></code> | <code>object</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}.

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Setting`<sup>Optional</sup> <a name="Setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting"></a>

```csharp
public object Setting { get; set; }
```

- *Type:* object

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#setting ElasticBeanstalkConfigurationTemplate#setting}

---

##### `SolutionStackName`<sup>Optional</sup> <a name="SolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}.

---

### ElasticBeanstalkConfigurationTemplateSetting <a name="ElasticBeanstalkConfigurationTemplateSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkConfigurationTemplateSetting {
    string Name,
    string Namespace,
    string Value,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkConfigurationTemplateSettingList <a name="ElasticBeanstalkConfigurationTemplateSettingList" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkConfigurationTemplateSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get"></a>

```csharp
private ElasticBeanstalkConfigurationTemplateSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticBeanstalkConfigurationTemplateSettingOutputReference <a name="ElasticBeanstalkConfigurationTemplateSettingOutputReference" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkConfigurationTemplateSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



