# `dataAwsSesv2EmailIdentity` Submodule <a name="`dataAwsSesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2EmailIdentity <a name="DataAwsSesv2EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2EmailIdentity(Construct Scope, string Id, DataAwsSesv2EmailIdentityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig">DataAwsSesv2EmailIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig">DataAwsSesv2EmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentity.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2EmailIdentity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSesv2EmailIdentity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSesv2EmailIdentity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSesv2EmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2EmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus">VerifiedForSendingStatus</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `DkimSigningAttributes`<sup>Required</sup> <a name="DkimSigningAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.dkimSigningAttributes"></a>

```csharp
public DataAwsSesv2EmailIdentityDkimSigningAttributesList DkimSigningAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList">DataAwsSesv2EmailIdentityDkimSigningAttributesList</a>

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `VerifiedForSendingStatus`<sup>Required</sup> <a name="VerifiedForSendingStatus" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```csharp
public IResolvable VerifiedForSendingStatus { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentityInput"></a>

```csharp
public string EmailIdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2EmailIdentityConfig <a name="DataAwsSesv2EmailIdentityConfig" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2EmailIdentityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EmailIdentity,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#email_identity DataAwsSesv2EmailIdentity#email_identity}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#id DataAwsSesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#region DataAwsSesv2EmailIdentity#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/sesv2_email_identity#tags DataAwsSesv2EmailIdentity#tags}.

---

### DataAwsSesv2EmailIdentityDkimSigningAttributes <a name="DataAwsSesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2EmailIdentityDkimSigningAttributes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2EmailIdentityDkimSigningAttributesList <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesList" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2EmailIdentityDkimSigningAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get"></a>

```csharp
private DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference <a name="DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">CurrentSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">LastKeyGenerationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">SigningAttributesOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">Tokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentSigningKeyLength`<sup>Required</sup> <a name="CurrentSigningKeyLength" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```csharp
public string CurrentSigningKeyLength { get; }
```

- *Type:* string

---

##### `DomainSigningPrivateKey`<sup>Required</sup> <a name="DomainSigningPrivateKey" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```csharp
public string DomainSigningPrivateKey { get; }
```

- *Type:* string

---

##### `DomainSigningSelector`<sup>Required</sup> <a name="DomainSigningSelector" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```csharp
public string DomainSigningSelector { get; }
```

- *Type:* string

---

##### `LastKeyGenerationTimestamp`<sup>Required</sup> <a name="LastKeyGenerationTimestamp" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```csharp
public string LastKeyGenerationTimestamp { get; }
```

- *Type:* string

---

##### `NextSigningKeyLength`<sup>Required</sup> <a name="NextSigningKeyLength" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```csharp
public string NextSigningKeyLength { get; }
```

- *Type:* string

---

##### `SigningAttributesOrigin`<sup>Required</sup> <a name="SigningAttributesOrigin" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```csharp
public string SigningAttributesOrigin { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```csharp
public string[] Tokens { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2EmailIdentityDkimSigningAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2EmailIdentity.DataAwsSesv2EmailIdentityDkimSigningAttributes">DataAwsSesv2EmailIdentityDkimSigningAttributes</a>

---



