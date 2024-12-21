# `dataAwsVerifiedpermissionsPolicyStore` Submodule <a name="`dataAwsVerifiedpermissionsPolicyStore` Submodule" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVerifiedpermissionsPolicyStore <a name="DataAwsVerifiedpermissionsPolicyStore" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVerifiedpermissionsPolicyStore(Construct Scope, string Id, DataAwsVerifiedpermissionsPolicyStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig">DataAwsVerifiedpermissionsPolicyStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig">DataAwsVerifiedpermissionsPolicyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVerifiedpermissionsPolicyStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVerifiedpermissionsPolicyStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVerifiedpermissionsPolicyStore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVerifiedpermissionsPolicyStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsVerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVerifiedpermissionsPolicyStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.validationSettings">ValidationSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList">DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `ValidationSettings`<sup>Required</sup> <a name="ValidationSettings" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.validationSettings"></a>

```csharp
public DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList ValidationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList">DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVerifiedpermissionsPolicyStoreConfig <a name="DataAwsVerifiedpermissionsPolicyStoreConfig" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVerifiedpermissionsPolicyStoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsVerifiedpermissionsPolicyStoreValidationSettings <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettings" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVerifiedpermissionsPolicyStoreValidationSettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get"></a>

```csharp
private DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings">DataAwsVerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsVerifiedpermissionsPolicyStoreValidationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVerifiedpermissionsPolicyStore.DataAwsVerifiedpermissionsPolicyStoreValidationSettings">DataAwsVerifiedpermissionsPolicyStoreValidationSettings</a>

---



