# `elasticBeanstalkEnvironment` Submodule <a name="`elasticBeanstalkEnvironment` Submodule" id="@cdktf/provider-aws.elasticBeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkEnvironment <a name="ElasticBeanstalkEnvironment" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment aws_elastic_beanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironment(Construct Scope, string Id, ElasticBeanstalkEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig">ElasticBeanstalkEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig">ElasticBeanstalkEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting">PutSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix">ResetCnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn">ResetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval">ResetPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting">ResetSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName">ResetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName">ResetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel">ResetVersionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout">ResetWaitForReadyTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSetting` <a name="PutSetting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting"></a>

```csharp
private void PutSetting(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting.parameter.value"></a>

- *Type:* object

---

##### `ResetCnamePrefix` <a name="ResetCnamePrefix" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix"></a>

```csharp
private void ResetCnamePrefix()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlatformArn` <a name="ResetPlatformArn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn"></a>

```csharp
private void ResetPlatformArn()
```

##### `ResetPollInterval` <a name="ResetPollInterval" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval"></a>

```csharp
private void ResetPollInterval()
```

##### `ResetSetting` <a name="ResetSetting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting"></a>

```csharp
private void ResetSetting()
```

##### `ResetSolutionStackName` <a name="ResetSolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName"></a>

```csharp
private void ResetSolutionStackName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName"></a>

```csharp
private void ResetTemplateName()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier"></a>

```csharp
private void ResetTier()
```

##### `ResetVersionLabel` <a name="ResetVersionLabel" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel"></a>

```csharp
private void ResetVersionLabel()
```

##### `ResetWaitForReadyTimeout` <a name="ResetWaitForReadyTimeout" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout"></a>

```csharp
private void ResetWaitForReadyTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings">AllSettings</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups">AutoscalingGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations">LaunchConfigurations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers">LoadBalancers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues">Queues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting">Setting</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers">Triggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput">CnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput">PlatformArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput">PollIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput">SettingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput">SolutionStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput">VersionLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput">WaitForReadyTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix">CnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn">PlatformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval">PollInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel">VersionLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout">WaitForReadyTimeout</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllSettings`<sup>Required</sup> <a name="AllSettings" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings"></a>

```csharp
public ElasticBeanstalkEnvironmentAllSettingsList AllSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoscalingGroups`<sup>Required</sup> <a name="AutoscalingGroups" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups"></a>

```csharp
public string[] AutoscalingGroups { get; }
```

- *Type:* string[]

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `LaunchConfigurations`<sup>Required</sup> <a name="LaunchConfigurations" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations"></a>

```csharp
public string[] LaunchConfigurations { get; }
```

- *Type:* string[]

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers"></a>

```csharp
public string[] LoadBalancers { get; }
```

- *Type:* string[]

---

##### `Queues`<sup>Required</sup> <a name="Queues" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues"></a>

```csharp
public string[] Queues { get; }
```

- *Type:* string[]

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting"></a>

```csharp
public ElasticBeanstalkEnvironmentSettingList Setting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a>

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers"></a>

```csharp
public string[] Triggers { get; }
```

- *Type:* string[]

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `CnamePrefixInput`<sup>Optional</sup> <a name="CnamePrefixInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput"></a>

```csharp
public string CnamePrefixInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformArnInput`<sup>Optional</sup> <a name="PlatformArnInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput"></a>

```csharp
public string PlatformArnInput { get; }
```

- *Type:* string

---

##### `PollIntervalInput`<sup>Optional</sup> <a name="PollIntervalInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput"></a>

```csharp
public string PollIntervalInput { get; }
```

- *Type:* string

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput"></a>

```csharp
public object SettingInput { get; }
```

- *Type:* object

---

##### `SolutionStackNameInput`<sup>Optional</sup> <a name="SolutionStackNameInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput"></a>

```csharp
public string SolutionStackNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `VersionLabelInput`<sup>Optional</sup> <a name="VersionLabelInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput"></a>

```csharp
public string VersionLabelInput { get; }
```

- *Type:* string

---

##### `WaitForReadyTimeoutInput`<sup>Optional</sup> <a name="WaitForReadyTimeoutInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput"></a>

```csharp
public string WaitForReadyTimeoutInput { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `CnamePrefix`<sup>Required</sup> <a name="CnamePrefix" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix"></a>

```csharp
public string CnamePrefix { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformArn`<sup>Required</sup> <a name="PlatformArn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn"></a>

```csharp
public string PlatformArn { get; }
```

- *Type:* string

---

##### `PollInterval`<sup>Required</sup> <a name="PollInterval" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval"></a>

```csharp
public string PollInterval { get; }
```

- *Type:* string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `VersionLabel`<sup>Required</sup> <a name="VersionLabel" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel"></a>

```csharp
public string VersionLabel { get; }
```

- *Type:* string

---

##### `WaitForReadyTimeout`<sup>Required</sup> <a name="WaitForReadyTimeout" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout"></a>

```csharp
public string WaitForReadyTimeout { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkEnvironmentAllSettings <a name="ElasticBeanstalkEnvironmentAllSettings" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironmentAllSettings {

};
```


### ElasticBeanstalkEnvironmentConfig <a name="ElasticBeanstalkEnvironmentConfig" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironmentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Application,
    string Name,
    string CnamePrefix = null,
    string Description = null,
    string Id = null,
    string PlatformArn = null,
    string PollInterval = null,
    object Setting = null,
    string SolutionStackName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TemplateName = null,
    string Tier = null,
    string VersionLabel = null,
    string WaitForReadyTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application">Application</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix">CnamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn">PlatformArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval">PollInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting">Setting</a></code> | <code>object</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName">SolutionStackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName">TemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier">Tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel">VersionLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout">WaitForReadyTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `CnamePrefix`<sup>Optional</sup> <a name="CnamePrefix" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```csharp
public string CnamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlatformArn`<sup>Optional</sup> <a name="PlatformArn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn"></a>

```csharp
public string PlatformArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}.

---

##### `PollInterval`<sup>Optional</sup> <a name="PollInterval" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval"></a>

```csharp
public string PollInterval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}.

---

##### `Setting`<sup>Optional</sup> <a name="Setting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting"></a>

```csharp
public object Setting { get; set; }
```

- *Type:* object

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}

---

##### `SolutionStackName`<sup>Optional</sup> <a name="SolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName"></a>

```csharp
public string SolutionStackName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}.

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}.

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}.

---

##### `VersionLabel`<sup>Optional</sup> <a name="VersionLabel" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel"></a>

```csharp
public string VersionLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}.

---

##### `WaitForReadyTimeout`<sup>Optional</sup> <a name="WaitForReadyTimeout" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout"></a>

```csharp
public string WaitForReadyTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}.

---

### ElasticBeanstalkEnvironmentSetting <a name="ElasticBeanstalkEnvironmentSetting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironmentSetting {
    string Name,
    string Namespace,
    string Value,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkEnvironmentAllSettingsList <a name="ElasticBeanstalkEnvironmentAllSettingsList" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironmentAllSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get"></a>

```csharp
private ElasticBeanstalkEnvironmentAllSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ElasticBeanstalkEnvironmentAllSettingsOutputReference <a name="ElasticBeanstalkEnvironmentAllSettingsOutputReference" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironmentAllSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue"></a>

```csharp
public ElasticBeanstalkEnvironmentAllSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a>

---


### ElasticBeanstalkEnvironmentSettingList <a name="ElasticBeanstalkEnvironmentSettingList" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironmentSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get"></a>

```csharp
private ElasticBeanstalkEnvironmentSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticBeanstalkEnvironmentSettingOutputReference <a name="ElasticBeanstalkEnvironmentSettingOutputReference" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkEnvironmentSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



