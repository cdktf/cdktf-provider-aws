# `devicefarmInstanceProfile` Submodule <a name="`devicefarmInstanceProfile` Submodule" id="@cdktf/provider-aws.devicefarmInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmInstanceProfile <a name="DevicefarmInstanceProfile" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile aws_devicefarm_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevicefarmInstanceProfile(Construct Scope, string Id, DevicefarmInstanceProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig">DevicefarmInstanceProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig">DevicefarmInstanceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup">ResetExcludeAppPackagesFromCleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup">ResetPackageCleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse">ResetRebootAfterUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludeAppPackagesFromCleanup` <a name="ResetExcludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup"></a>

```csharp
private void ResetExcludeAppPackagesFromCleanup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPackageCleanup` <a name="ResetPackageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup"></a>

```csharp
private void ResetPackageCleanup()
```

##### `ResetRebootAfterUse` <a name="ResetRebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse"></a>

```csharp
private void ResetRebootAfterUse()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevicefarmInstanceProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevicefarmInstanceProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevicefarmInstanceProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput">ExcludeAppPackagesFromCleanupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput">PackageCleanupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput">RebootAfterUseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup">ExcludeAppPackagesFromCleanup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup">PackageCleanup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse">RebootAfterUse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludeAppPackagesFromCleanupInput`<sup>Optional</sup> <a name="ExcludeAppPackagesFromCleanupInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput"></a>

```csharp
public string[] ExcludeAppPackagesFromCleanupInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PackageCleanupInput`<sup>Optional</sup> <a name="PackageCleanupInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput"></a>

```csharp
public object PackageCleanupInput { get; }
```

- *Type:* object

---

##### `RebootAfterUseInput`<sup>Optional</sup> <a name="RebootAfterUseInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput"></a>

```csharp
public object RebootAfterUseInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludeAppPackagesFromCleanup`<sup>Required</sup> <a name="ExcludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

```csharp
public string[] ExcludeAppPackagesFromCleanup { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackageCleanup`<sup>Required</sup> <a name="PackageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup"></a>

```csharp
public object PackageCleanup { get; }
```

- *Type:* object

---

##### `RebootAfterUse`<sup>Required</sup> <a name="RebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse"></a>

```csharp
public object RebootAfterUse { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmInstanceProfileConfig <a name="DevicefarmInstanceProfileConfig" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevicefarmInstanceProfileConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string[] ExcludeAppPackagesFromCleanup = null,
    string Id = null,
    object PackageCleanup = null,
    object RebootAfterUse = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup">ExcludeAppPackagesFromCleanup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup">PackageCleanup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse">RebootAfterUse</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `ExcludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="ExcludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup"></a>

```csharp
public string[] ExcludeAppPackagesFromCleanup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageCleanup`<sup>Optional</sup> <a name="PackageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup"></a>

```csharp
public object PackageCleanup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `RebootAfterUse`<sup>Optional</sup> <a name="RebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse"></a>

```csharp
public object RebootAfterUse { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---



