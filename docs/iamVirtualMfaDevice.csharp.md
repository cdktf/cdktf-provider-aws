# `iamVirtualMfaDevice` Submodule <a name="`iamVirtualMfaDevice` Submodule" id="@cdktf/provider-aws.iamVirtualMfaDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamVirtualMfaDevice <a name="IamVirtualMfaDevice" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device aws_iam_virtual_mfa_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamVirtualMfaDevice(Construct Scope, string Id, IamVirtualMfaDeviceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig">IamVirtualMfaDeviceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig">IamVirtualMfaDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamVirtualMfaDevice.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamVirtualMfaDevice.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamVirtualMfaDevice.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.base32StringSeed">Base32StringSeed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.qrCodePng">QrCodePng</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceNameInput">VirtualMfaDeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceName">VirtualMfaDeviceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Base32StringSeed`<sup>Required</sup> <a name="Base32StringSeed" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.base32StringSeed"></a>

```csharp
public string Base32StringSeed { get; }
```

- *Type:* string

---

##### `QrCodePng`<sup>Required</sup> <a name="QrCodePng" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.qrCodePng"></a>

```csharp
public string QrCodePng { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualMfaDeviceNameInput`<sup>Optional</sup> <a name="VirtualMfaDeviceNameInput" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceNameInput"></a>

```csharp
public string VirtualMfaDeviceNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualMfaDeviceName`<sup>Required</sup> <a name="VirtualMfaDeviceName" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.virtualMfaDeviceName"></a>

```csharp
public string VirtualMfaDeviceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDevice.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamVirtualMfaDeviceConfig <a name="IamVirtualMfaDeviceConfig" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamVirtualMfaDeviceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VirtualMfaDeviceName,
    string Id = null,
    string Path = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.virtualMfaDeviceName">VirtualMfaDeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}. |
| <code><a href="#@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VirtualMfaDeviceName`<sup>Required</sup> <a name="VirtualMfaDeviceName" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.virtualMfaDeviceName"></a>

```csharp
public string VirtualMfaDeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.iamVirtualMfaDevice.IamVirtualMfaDeviceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}.

---



