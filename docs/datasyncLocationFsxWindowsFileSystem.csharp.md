# `datasyncLocationFsxWindowsFileSystem` Submodule <a name="`datasyncLocationFsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxWindowsFileSystem <a name="DatasyncLocationFsxWindowsFileSystem" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system aws_datasync_location_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatasyncLocationFsxWindowsFileSystem(Construct Scope, string Id, DatasyncLocationFsxWindowsFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory"></a>

```csharp
private void ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatasyncLocationFsxWindowsFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatasyncLocationFsxWindowsFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatasyncLocationFsxWindowsFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput">FsxFilesystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FsxFilesystemArnInput`<sup>Optional</sup> <a name="FsxFilesystemArnInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput"></a>

```csharp
public string FsxFilesystemArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput"></a>

```csharp
public string[] SecurityGroupArnsInput { get; }
```

- *Type:* string[]

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn"></a>

```csharp
public string FsxFilesystemArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; }
```

- *Type:* string[]

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxWindowsFileSystemConfig <a name="DatasyncLocationFsxWindowsFileSystemConfig" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatasyncLocationFsxWindowsFileSystemConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FsxFilesystemArn,
    string Password,
    string[] SecurityGroupArns,
    string User,
    string Domain = null,
    string Id = null,
    string Subdirectory = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory">Subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn"></a>

```csharp
public string FsxFilesystemArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}.

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}.

---



