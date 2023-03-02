# `licensemanagerLicenseConfiguration` Submodule <a name="`licensemanagerLicenseConfiguration` Submodule" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseConfiguration <a name="LicensemanagerLicenseConfiguration" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration aws_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LicensemanagerLicenseConfiguration(Construct Scope, string Id, LicensemanagerLicenseConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount">ResetLicenseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit">ResetLicenseCountHardLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules">ResetLicenseRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseCount` <a name="ResetLicenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount"></a>

```csharp
private void ResetLicenseCount()
```

##### `ResetLicenseCountHardLimit` <a name="ResetLicenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit"></a>

```csharp
private void ResetLicenseCountHardLimit()
```

##### `ResetLicenseRules` <a name="ResetLicenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules"></a>

```csharp
private void ResetLicenseRules()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LicensemanagerLicenseConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LicensemanagerLicenseConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LicensemanagerLicenseConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput">LicenseCountHardLimitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput">LicenseCountingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput">LicenseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput">LicenseRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount">LicenseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit">LicenseCountHardLimit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType">LicenseCountingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules">LicenseRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseCountHardLimitInput`<sup>Optional</sup> <a name="LicenseCountHardLimitInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput"></a>

```csharp
public object LicenseCountHardLimitInput { get; }
```

- *Type:* object

---

##### `LicenseCountingTypeInput`<sup>Optional</sup> <a name="LicenseCountingTypeInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput"></a>

```csharp
public string LicenseCountingTypeInput { get; }
```

- *Type:* string

---

##### `LicenseCountInput`<sup>Optional</sup> <a name="LicenseCountInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput"></a>

```csharp
public double LicenseCountInput { get; }
```

- *Type:* double

---

##### `LicenseRulesInput`<sup>Optional</sup> <a name="LicenseRulesInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput"></a>

```csharp
public string[] LicenseRulesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount"></a>

```csharp
public double LicenseCount { get; }
```

- *Type:* double

---

##### `LicenseCountHardLimit`<sup>Required</sup> <a name="LicenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```csharp
public object LicenseCountHardLimit { get; }
```

- *Type:* object

---

##### `LicenseCountingType`<sup>Required</sup> <a name="LicenseCountingType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```csharp
public string LicenseCountingType { get; }
```

- *Type:* string

---

##### `LicenseRules`<sup>Required</sup> <a name="LicenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules"></a>

```csharp
public string[] LicenseRules { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfigurationConfig <a name="LicensemanagerLicenseConfigurationConfig" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LicensemanagerLicenseConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LicenseCountingType,
    string Name,
    string Description = null,
    string Id = null,
    double LicenseCount = null,
    object LicenseCountHardLimit = null,
    string[] LicenseRules = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType">LicenseCountingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount">LicenseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit">LicenseCountHardLimit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules">LicenseRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LicenseCountingType`<sup>Required</sup> <a name="LicenseCountingType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType"></a>

```csharp
public string LicenseCountingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseCount`<sup>Optional</sup> <a name="LicenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount"></a>

```csharp
public double LicenseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}.

---

##### `LicenseCountHardLimit`<sup>Optional</sup> <a name="LicenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit"></a>

```csharp
public object LicenseCountHardLimit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}.

---

##### `LicenseRules`<sup>Optional</sup> <a name="LicenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules"></a>

```csharp
public string[] LicenseRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}.

---



