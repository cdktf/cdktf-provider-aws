# `ivschatLoggingConfiguration` Submodule <a name="`ivschatLoggingConfiguration` Submodule" id="@cdktf/provider-aws.ivschatLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatLoggingConfiguration <a name="IvschatLoggingConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration aws_ivschat_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfiguration(Construct Scope, string Id, IvschatLoggingConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig">IvschatLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig">IvschatLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetDestinationConfiguration">ResetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration"></a>

```csharp
private void PutDestinationConfiguration(IvschatLoggingConfigurationDestinationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(IvschatLoggingConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>

---

##### `ResetDestinationConfiguration` <a name="ResetDestinationConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetDestinationConfiguration"></a>

```csharp
private void ResetDestinationConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvschatLoggingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvschatLoggingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvschatLoggingConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference">IvschatLoggingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference">IvschatLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfiguration"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationOutputReference DestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference">IvschatLoggingConfigurationDestinationConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeouts"></a>

```csharp
public IvschatLoggingConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference">IvschatLoggingConfigurationTimeoutsOutputReference</a>

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.destinationConfigurationInput"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfiguration DestinationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatLoggingConfigurationConfig <a name="IvschatLoggingConfigurationConfig" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    IvschatLoggingConfigurationDestinationConfiguration DestinationConfiguration = null,
    string Id = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    IvschatLoggingConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#id IvschatLoggingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags_all IvschatLoggingConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DestinationConfiguration`<sup>Optional</sup> <a name="DestinationConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.destinationConfiguration"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfiguration DestinationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#destination_configuration IvschatLoggingConfiguration#destination_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#id IvschatLoggingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#tags_all IvschatLoggingConfiguration#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationConfig.property.timeouts"></a>

```csharp
public IvschatLoggingConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts">IvschatLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#timeouts IvschatLoggingConfiguration#timeouts}

---

### IvschatLoggingConfigurationDestinationConfiguration <a name="IvschatLoggingConfigurationDestinationConfiguration" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfiguration {
    IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs CloudwatchLogs = null,
    IvschatLoggingConfigurationDestinationConfigurationFirehose Firehose = null,
    IvschatLoggingConfigurationDestinationConfigurationS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.cloudwatchLogs"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#cloudwatch_logs IvschatLoggingConfiguration#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.firehose"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#firehose IvschatLoggingConfiguration#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration.property.s3"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#s3 IvschatLoggingConfiguration#s3}

---

### IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs <a name="IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs {
    string LogGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#log_group_name IvschatLoggingConfiguration#log_group_name}. |

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#log_group_name IvschatLoggingConfiguration#log_group_name}.

---

### IvschatLoggingConfigurationDestinationConfigurationFirehose <a name="IvschatLoggingConfigurationDestinationConfigurationFirehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfigurationFirehose {
    string DeliveryStreamName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delivery_stream_name IvschatLoggingConfiguration#delivery_stream_name}. |

---

##### `DeliveryStreamName`<sup>Required</sup> <a name="DeliveryStreamName" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose.property.deliveryStreamName"></a>

```csharp
public string DeliveryStreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delivery_stream_name IvschatLoggingConfiguration#delivery_stream_name}.

---

### IvschatLoggingConfigurationDestinationConfigurationS3 <a name="IvschatLoggingConfigurationDestinationConfigurationS3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfigurationS3 {
    string BucketName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#bucket_name IvschatLoggingConfiguration#bucket_name}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#bucket_name IvschatLoggingConfiguration#bucket_name}.

---

### IvschatLoggingConfigurationTimeouts <a name="IvschatLoggingConfigurationTimeouts" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#create IvschatLoggingConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delete IvschatLoggingConfiguration#delete}. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#update IvschatLoggingConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#create IvschatLoggingConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#delete IvschatLoggingConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_logging_configuration#update IvschatLoggingConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---


### IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamNameInput">DeliveryStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamNameInput`<sup>Optional</sup> <a name="DeliveryStreamNameInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```csharp
public string DeliveryStreamNameInput { get; }
```

- *Type:* string

---

##### `DeliveryStreamName`<sup>Required</sup> <a name="DeliveryStreamName" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.deliveryStreamName"></a>

```csharp
public string DeliveryStreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference.property.internalValue"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationFirehose InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---


### IvschatLoggingConfigurationDestinationConfigurationOutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(IvschatLoggingConfigurationDestinationConfigurationFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3"></a>

```csharp
private void PutS3(IvschatLoggingConfigurationDestinationConfigurationS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference">IvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogs"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehose"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference">IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference">IvschatLoggingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs">IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.firehoseInput"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationFirehose FirehoseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationFirehose">IvschatLoggingConfigurationDestinationConfigurationFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.s3Input"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfiguration">IvschatLoggingConfigurationDestinationConfiguration</a>

---


### IvschatLoggingConfigurationDestinationConfigurationS3OutputReference <a name="IvschatLoggingConfigurationDestinationConfigurationS3OutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationDestinationConfigurationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```csharp
public IvschatLoggingConfigurationDestinationConfigurationS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationDestinationConfigurationS3">IvschatLoggingConfigurationDestinationConfigurationS3</a>

---


### IvschatLoggingConfigurationTimeoutsOutputReference <a name="IvschatLoggingConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatLoggingConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivschatLoggingConfiguration.IvschatLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



