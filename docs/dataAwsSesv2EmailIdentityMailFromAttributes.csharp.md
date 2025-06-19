# `dataAwsSesv2EmailIdentityMailFromAttributes` Submodule <a name="`dataAwsSesv2EmailIdentityMailFromAttributes` Submodule" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2EmailIdentityMailFromAttributes <a name="DataAwsSesv2EmailIdentityMailFromAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2EmailIdentityMailFromAttributes(Construct Scope, string Id, DataAwsSesv2EmailIdentityMailFromAttributesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig">DataAwsSesv2EmailIdentityMailFromAttributesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig">DataAwsSesv2EmailIdentityMailFromAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentityMailFromAttributes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentityMailFromAttributes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentityMailFromAttributes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentityMailFromAttributes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSesv2EmailIdentityMailFromAttributes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSesv2EmailIdentityMailFromAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2EmailIdentityMailFromAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure">BehaviorOnMxFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.mailFromDomain">MailFromDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BehaviorOnMxFailure`<sup>Required</sup> <a name="BehaviorOnMxFailure" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```csharp
public string BehaviorOnMxFailure { get; }
```

- *Type:* string

---

##### `MailFromDomain`<sup>Required</sup> <a name="MailFromDomain" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```csharp
public string MailFromDomain { get; }
```

- *Type:* string

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentityInput"></a>

```csharp
public string EmailIdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2EmailIdentityMailFromAttributesConfig <a name="DataAwsSesv2EmailIdentityMailFromAttributesConfig" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2EmailIdentityMailFromAttributesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EmailIdentity,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#email_identity DataAwsSesv2EmailIdentityMailFromAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#id DataAwsSesv2EmailIdentityMailFromAttributes#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#email_identity DataAwsSesv2EmailIdentityMailFromAttributes#email_identity}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#id DataAwsSesv2EmailIdentityMailFromAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentityMailFromAttributes.DataAwsSesv2EmailIdentityMailFromAttributesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#region DataAwsSesv2EmailIdentityMailFromAttributes#region}

---



