# `dataAwsKmsCustomKeyStore` Submodule <a name="`dataAwsKmsCustomKeyStore` Submodule" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsCustomKeyStore <a name="DataAwsKmsCustomKeyStore" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store aws_kms_custom_key_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKmsCustomKeyStore(Construct Scope, string Id, DataAwsKmsCustomKeyStoreConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig">DataAwsKmsCustomKeyStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig">DataAwsKmsCustomKeyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreId">ResetCustomKeyStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreName">ResetCustomKeyStoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCustomKeyStoreId` <a name="ResetCustomKeyStoreId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreId"></a>

```csharp
private void ResetCustomKeyStoreId()
```

##### `ResetCustomKeyStoreName` <a name="ResetCustomKeyStoreName" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetCustomKeyStoreName"></a>

```csharp
private void ResetCustomKeyStoreName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKmsCustomKeyStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKmsCustomKeyStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKmsCustomKeyStore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cloudHsmClusterId">CloudHsmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.trustAnchorCertificate">TrustAnchorCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreIdInput">CustomKeyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreNameInput">CustomKeyStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreName">CustomKeyStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CloudHsmClusterId`<sup>Required</sup> <a name="CloudHsmClusterId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.cloudHsmClusterId"></a>

```csharp
public string CloudHsmClusterId { get; }
```

- *Type:* string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `TrustAnchorCertificate`<sup>Required</sup> <a name="TrustAnchorCertificate" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.trustAnchorCertificate"></a>

```csharp
public string TrustAnchorCertificate { get; }
```

- *Type:* string

---

##### `CustomKeyStoreIdInput`<sup>Optional</sup> <a name="CustomKeyStoreIdInput" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreIdInput"></a>

```csharp
public string CustomKeyStoreIdInput { get; }
```

- *Type:* string

---

##### `CustomKeyStoreNameInput`<sup>Optional</sup> <a name="CustomKeyStoreNameInput" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreNameInput"></a>

```csharp
public string CustomKeyStoreNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CustomKeyStoreId`<sup>Required</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreId"></a>

```csharp
public string CustomKeyStoreId { get; }
```

- *Type:* string

---

##### `CustomKeyStoreName`<sup>Required</sup> <a name="CustomKeyStoreName" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.customKeyStoreName"></a>

```csharp
public string CustomKeyStoreName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsCustomKeyStoreConfig <a name="DataAwsKmsCustomKeyStoreConfig" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKmsCustomKeyStoreConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomKeyStoreId = null,
    string CustomKeyStoreName = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreId">CustomKeyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_id DataAwsKmsCustomKeyStore#custom_key_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreName">CustomKeyStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_name DataAwsKmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#id DataAwsKmsCustomKeyStore#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomKeyStoreId`<sup>Optional</sup> <a name="CustomKeyStoreId" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreId"></a>

```csharp
public string CustomKeyStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_id DataAwsKmsCustomKeyStore#custom_key_store_id}.

---

##### `CustomKeyStoreName`<sup>Optional</sup> <a name="CustomKeyStoreName" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.customKeyStoreName"></a>

```csharp
public string CustomKeyStoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#custom_key_store_name DataAwsKmsCustomKeyStore#custom_key_store_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKmsCustomKeyStore.DataAwsKmsCustomKeyStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_custom_key_store#id DataAwsKmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



