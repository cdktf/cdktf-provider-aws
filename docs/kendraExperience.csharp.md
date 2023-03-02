# `kendraExperience` Submodule <a name="`kendraExperience` Submodule" id="@cdktf/provider-aws.kendraExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraExperience <a name="KendraExperience" id="@cdktf/provider-aws.kendraExperience.KendraExperience"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience aws_kendra_experience}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperience(Construct Scope, string Id, KendraExperienceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig">KendraExperienceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kendraExperience.KendraExperience.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig">KendraExperienceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraExperience.KendraExperience.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kendraExperience.KendraExperience.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration"></a>

```csharp
private void PutConfiguration(KendraExperienceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts"></a>

```csharp
private void PutTimeouts(KendraExperienceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraExperience.KendraExperience.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraExperience.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraExperience.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraExperience.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraExperience.KendraExperience.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference">KendraExperienceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList">KendraExperienceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.experienceId">ExperienceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference">KendraExperienceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexIdInput">IndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.configuration"></a>

```csharp
public KendraExperienceConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference">KendraExperienceConfigurationOutputReference</a>

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.endpoints"></a>

```csharp
public KendraExperienceEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList">KendraExperienceEndpointsList</a>

---

##### `ExperienceId`<sup>Required</sup> <a name="ExperienceId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.experienceId"></a>

```csharp
public string ExperienceId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeouts"></a>

```csharp
public KendraExperienceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference">KendraExperienceTimeoutsOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.configurationInput"></a>

```csharp
public KendraExperienceConfiguration ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexIdInput"></a>

```csharp
public string IndexIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperience.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kendraExperience.KendraExperience.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraExperienceConfig <a name="KendraExperienceConfig" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IndexId,
    string Name,
    string RoleArn,
    KendraExperienceConfiguration Configuration = null,
    string Description = null,
    string Id = null,
    KendraExperienceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.indexId">IndexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.indexId"></a>

```csharp
public string IndexId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.configuration"></a>

```csharp
public KendraExperienceConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#configuration KendraExperience#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfig.property.timeouts"></a>

```csharp
public KendraExperienceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts">KendraExperienceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#timeouts KendraExperience#timeouts}

---

### KendraExperienceConfiguration <a name="KendraExperienceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceConfiguration {
    KendraExperienceConfigurationContentSourceConfiguration ContentSourceConfiguration = null,
    KendraExperienceConfigurationUserIdentityConfiguration UserIdentityConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.contentSourceConfiguration">ContentSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | content_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.userIdentityConfiguration">UserIdentityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | user_identity_configuration block. |

---

##### `ContentSourceConfiguration`<sup>Optional</sup> <a name="ContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.contentSourceConfiguration"></a>

```csharp
public KendraExperienceConfigurationContentSourceConfiguration ContentSourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

content_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#content_source_configuration KendraExperience#content_source_configuration}

---

##### `UserIdentityConfiguration`<sup>Optional</sup> <a name="UserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration.property.userIdentityConfiguration"></a>

```csharp
public KendraExperienceConfigurationUserIdentityConfiguration UserIdentityConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

user_identity_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#user_identity_configuration KendraExperience#user_identity_configuration}

---

### KendraExperienceConfigurationContentSourceConfiguration <a name="KendraExperienceConfigurationContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceConfigurationContentSourceConfiguration {
    string[] DataSourceIds = null,
    object DirectPutContent = null,
    string[] FaqIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.dataSourceIds">DataSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.directPutContent">DirectPutContent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.faqIds">FaqIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}. |

---

##### `DataSourceIds`<sup>Optional</sup> <a name="DataSourceIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.dataSourceIds"></a>

```csharp
public string[] DataSourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}.

---

##### `DirectPutContent`<sup>Optional</sup> <a name="DirectPutContent" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.directPutContent"></a>

```csharp
public object DirectPutContent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}.

---

##### `FaqIds`<sup>Optional</sup> <a name="FaqIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration.property.faqIds"></a>

```csharp
public string[] FaqIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}.

---

### KendraExperienceConfigurationUserIdentityConfiguration <a name="KendraExperienceConfigurationUserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceConfigurationUserIdentityConfiguration {
    string IdentityAttributeName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.property.identityAttributeName">IdentityAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}. |

---

##### `IdentityAttributeName`<sup>Required</sup> <a name="IdentityAttributeName" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration.property.identityAttributeName"></a>

```csharp
public string IdentityAttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}.

---

### KendraExperienceEndpoints <a name="KendraExperienceEndpoints" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceEndpoints {

};
```


### KendraExperienceTimeouts <a name="KendraExperienceTimeouts" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraExperienceConfigurationContentSourceConfigurationOutputReference <a name="KendraExperienceConfigurationContentSourceConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceConfigurationContentSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDataSourceIds">ResetDataSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDirectPutContent">ResetDirectPutContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetFaqIds">ResetFaqIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSourceIds` <a name="ResetDataSourceIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDataSourceIds"></a>

```csharp
private void ResetDataSourceIds()
```

##### `ResetDirectPutContent` <a name="ResetDirectPutContent" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetDirectPutContent"></a>

```csharp
private void ResetDirectPutContent()
```

##### `ResetFaqIds` <a name="ResetFaqIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.resetFaqIds"></a>

```csharp
private void ResetFaqIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIdsInput">DataSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContentInput">DirectPutContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIdsInput">FaqIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIds">DataSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContent">DirectPutContent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIds">FaqIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceIdsInput`<sup>Optional</sup> <a name="DataSourceIdsInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIdsInput"></a>

```csharp
public string[] DataSourceIdsInput { get; }
```

- *Type:* string[]

---

##### `DirectPutContentInput`<sup>Optional</sup> <a name="DirectPutContentInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContentInput"></a>

```csharp
public object DirectPutContentInput { get; }
```

- *Type:* object

---

##### `FaqIdsInput`<sup>Optional</sup> <a name="FaqIdsInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIdsInput"></a>

```csharp
public string[] FaqIdsInput { get; }
```

- *Type:* string[]

---

##### `DataSourceIds`<sup>Required</sup> <a name="DataSourceIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.dataSourceIds"></a>

```csharp
public string[] DataSourceIds { get; }
```

- *Type:* string[]

---

##### `DirectPutContent`<sup>Required</sup> <a name="DirectPutContent" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.directPutContent"></a>

```csharp
public object DirectPutContent { get; }
```

- *Type:* object

---

##### `FaqIds`<sup>Required</sup> <a name="FaqIds" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.faqIds"></a>

```csharp
public string[] FaqIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraExperienceConfigurationContentSourceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---


### KendraExperienceConfigurationOutputReference <a name="KendraExperienceConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration">PutContentSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration">PutUserIdentityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetContentSourceConfiguration">ResetContentSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetUserIdentityConfiguration">ResetUserIdentityConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentSourceConfiguration` <a name="PutContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration"></a>

```csharp
private void PutContentSourceConfiguration(KendraExperienceConfigurationContentSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putContentSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---

##### `PutUserIdentityConfiguration` <a name="PutUserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration"></a>

```csharp
private void PutUserIdentityConfiguration(KendraExperienceConfigurationUserIdentityConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.putUserIdentityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---

##### `ResetContentSourceConfiguration` <a name="ResetContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetContentSourceConfiguration"></a>

```csharp
private void ResetContentSourceConfiguration()
```

##### `ResetUserIdentityConfiguration` <a name="ResetUserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.resetUserIdentityConfiguration"></a>

```csharp
private void ResetUserIdentityConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfiguration">ContentSourceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference">KendraExperienceConfigurationContentSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfiguration">UserIdentityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference">KendraExperienceConfigurationUserIdentityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfigurationInput">ContentSourceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfigurationInput">UserIdentityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentSourceConfiguration`<sup>Required</sup> <a name="ContentSourceConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfiguration"></a>

```csharp
public KendraExperienceConfigurationContentSourceConfigurationOutputReference ContentSourceConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfigurationOutputReference">KendraExperienceConfigurationContentSourceConfigurationOutputReference</a>

---

##### `UserIdentityConfiguration`<sup>Required</sup> <a name="UserIdentityConfiguration" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfiguration"></a>

```csharp
public KendraExperienceConfigurationUserIdentityConfigurationOutputReference UserIdentityConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference">KendraExperienceConfigurationUserIdentityConfigurationOutputReference</a>

---

##### `ContentSourceConfigurationInput`<sup>Optional</sup> <a name="ContentSourceConfigurationInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.contentSourceConfigurationInput"></a>

```csharp
public KendraExperienceConfigurationContentSourceConfiguration ContentSourceConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationContentSourceConfiguration">KendraExperienceConfigurationContentSourceConfiguration</a>

---

##### `UserIdentityConfigurationInput`<sup>Optional</sup> <a name="UserIdentityConfigurationInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.userIdentityConfigurationInput"></a>

```csharp
public KendraExperienceConfigurationUserIdentityConfiguration UserIdentityConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraExperienceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfiguration">KendraExperienceConfiguration</a>

---


### KendraExperienceConfigurationUserIdentityConfigurationOutputReference <a name="KendraExperienceConfigurationUserIdentityConfigurationOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceConfigurationUserIdentityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeNameInput">IdentityAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeName">IdentityAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityAttributeNameInput`<sup>Optional</sup> <a name="IdentityAttributeNameInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeNameInput"></a>

```csharp
public string IdentityAttributeNameInput { get; }
```

- *Type:* string

---

##### `IdentityAttributeName`<sup>Required</sup> <a name="IdentityAttributeName" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.identityAttributeName"></a>

```csharp
public string IdentityAttributeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraExperienceConfigurationUserIdentityConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceConfigurationUserIdentityConfiguration">KendraExperienceConfigurationUserIdentityConfiguration</a>

---


### KendraExperienceEndpointsList <a name="KendraExperienceEndpointsList" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get"></a>

```csharp
private KendraExperienceEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### KendraExperienceEndpointsOutputReference <a name="KendraExperienceEndpointsOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints">KendraExperienceEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceEndpointsOutputReference.property.internalValue"></a>

```csharp
public KendraExperienceEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceEndpoints">KendraExperienceEndpoints</a>

---


### KendraExperienceTimeoutsOutputReference <a name="KendraExperienceTimeoutsOutputReference" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraExperienceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraExperience.KendraExperienceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



