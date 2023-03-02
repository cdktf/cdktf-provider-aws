# `configConfigurationAggregator` Submodule <a name="`configConfigurationAggregator` Submodule" id="@cdktf/provider-aws.configConfigurationAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationAggregator <a name="ConfigConfigurationAggregator" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator aws_config_configuration_aggregator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigurationAggregator(Construct Scope, string Id, ConfigConfigurationAggregatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSource">PutAccountAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource">PutOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSource">ResetAccountAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource">ResetOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccountAggregationSource` <a name="PutAccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSource"></a>

```csharp
private void PutAccountAggregationSource(ConfigConfigurationAggregatorAccountAggregationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

---

##### `PutOrganizationAggregationSource` <a name="PutOrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource"></a>

```csharp
private void PutOrganizationAggregationSource(ConfigConfigurationAggregatorOrganizationAggregationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `ResetAccountAggregationSource` <a name="ResetAccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSource"></a>

```csharp
private void ResetAccountAggregationSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganizationAggregationSource` <a name="ResetOrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource"></a>

```csharp
private void ResetOrganizationAggregationSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConfigurationAggregator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConfigurationAggregator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigConfigurationAggregator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSource">AccountAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference">ConfigConfigurationAggregatorAccountAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource">OrganizationAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourceInput">AccountAggregationSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput">OrganizationAggregationSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountAggregationSource`<sup>Required</sup> <a name="AccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSource"></a>

```csharp
public ConfigConfigurationAggregatorAccountAggregationSourceOutputReference AccountAggregationSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference">ConfigConfigurationAggregatorAccountAggregationSourceOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OrganizationAggregationSource`<sup>Required</sup> <a name="OrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource"></a>

```csharp
public ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference OrganizationAggregationSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a>

---

##### `AccountAggregationSourceInput`<sup>Optional</sup> <a name="AccountAggregationSourceInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourceInput"></a>

```csharp
public ConfigConfigurationAggregatorAccountAggregationSource AccountAggregationSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationAggregationSourceInput`<sup>Optional</sup> <a name="OrganizationAggregationSourceInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput"></a>

```csharp
public ConfigConfigurationAggregatorOrganizationAggregationSource OrganizationAggregationSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationAggregatorAccountAggregationSource <a name="ConfigConfigurationAggregatorAccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigurationAggregatorAccountAggregationSource {
    string[] AccountIds,
    object AllRegions = null,
    string[] Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.accountIds">AccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.allRegions">AllRegions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}. |

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}.

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.allRegions"></a>

```csharp
public object AllRegions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}.

---

### ConfigConfigurationAggregatorConfig <a name="ConfigConfigurationAggregatorConfig" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigurationAggregatorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ConfigConfigurationAggregatorAccountAggregationSource AccountAggregationSource = null,
    string Id = null,
    ConfigConfigurationAggregatorOrganizationAggregationSource OrganizationAggregationSource = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#name ConfigConfigurationAggregator#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSource">AccountAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a></code> | account_aggregation_source block. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#id ConfigConfigurationAggregator#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource">OrganizationAggregationSource</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | organization_aggregation_source block. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags_all ConfigConfigurationAggregator#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#name ConfigConfigurationAggregator#name}.

---

##### `AccountAggregationSource`<sup>Optional</sup> <a name="AccountAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSource"></a>

```csharp
public ConfigConfigurationAggregatorAccountAggregationSource AccountAggregationSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

account_aggregation_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#id ConfigConfigurationAggregator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrganizationAggregationSource`<sup>Optional</sup> <a name="OrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource"></a>

```csharp
public ConfigConfigurationAggregatorOrganizationAggregationSource OrganizationAggregationSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

organization_aggregation_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#tags_all ConfigConfigurationAggregator#tags_all}.

---

### ConfigConfigurationAggregatorOrganizationAggregationSource <a name="ConfigConfigurationAggregatorOrganizationAggregationSource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigurationAggregatorOrganizationAggregationSource {
    string RoleArn,
    object AllRegions = null,
    string[] Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allRegions">AllRegions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}.

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allRegions"></a>

```csharp
public object AllRegions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationAggregatorAccountAggregationSourceOutputReference <a name="ConfigConfigurationAggregatorAccountAggregationSourceOutputReference" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigurationAggregatorAccountAggregationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetAllRegions"></a>

```csharp
private void ResetAllRegions()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegionsInput">AllRegionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegions">AllRegions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegionsInput"></a>

```csharp
public object AllRegionsInput { get; }
```

- *Type:* object

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.allRegions"></a>

```csharp
public object AllRegions { get; }
```

- *Type:* object

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourceOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigurationAggregatorAccountAggregationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSource">ConfigConfigurationAggregatorAccountAggregationSource</a>

---


### ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference <a name="ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllRegions"></a>

```csharp
private void ResetAllRegions()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegionsInput">AllRegionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegions">AllRegions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegionsInput"></a>

```csharp
public object AllRegionsInput { get; }
```

- *Type:* object

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allRegions"></a>

```csharp
public object AllRegions { get; }
```

- *Type:* object

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigurationAggregatorOrganizationAggregationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---



