# `efsAccessPoint` Submodule <a name="`efsAccessPoint` Submodule" id="@cdktf/provider-aws.efsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsAccessPoint <a name="EfsAccessPoint" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point aws_efs_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPoint(Construct Scope, string Id, EfsAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig">EfsAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig">EfsAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser">PutPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory">PutRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetPosixUser">ResetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPosixUser` <a name="PutPosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser"></a>

```csharp
private void PutPosixUser(EfsAccessPointPosixUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `PutRootDirectory` <a name="PutRootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory"></a>

```csharp
private void PutRootDirectory(EfsAccessPointRootDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetPosixUser"></a>

```csharp
private void ResetPosixUser()
```

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetRootDirectory"></a>

```csharp
private void ResetRootDirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EfsAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EfsAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EfsAccessPoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemArn">FileSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectory">RootDirectory</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUserInput">PosixUserInput</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FileSystemArn`<sup>Required</sup> <a name="FileSystemArn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemArn"></a>

```csharp
public string FileSystemArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUser"></a>

```csharp
public EfsAccessPointPosixUserOutputReference PosixUser { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a>

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectory"></a>

```csharp
public EfsAccessPointRootDirectoryOutputReference RootDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUserInput"></a>

```csharp
public EfsAccessPointPosixUser PosixUserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput"></a>

```csharp
public EfsAccessPointRootDirectory RootDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsAccessPointConfig <a name="EfsAccessPointConfig" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FileSystemId,
    string Id = null,
    EfsAccessPointPosixUser PosixUser = null,
    EfsAccessPointRootDirectory RootDirectory = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | posix_user block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory">RootDirectory</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | root_directory block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.posixUser"></a>

```csharp
public EfsAccessPointPosixUser PosixUser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

posix_user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#posix_user EfsAccessPoint#posix_user}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory"></a>

```csharp
public EfsAccessPointRootDirectory RootDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

root_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#root_directory EfsAccessPoint#root_directory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}.

---

### EfsAccessPointPosixUser <a name="EfsAccessPointPosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPointPosixUser {
    double Gid,
    double Uid,
    double[] SecondaryGids = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.gid">Gid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#gid EfsAccessPoint#gid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.uid">Uid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#uid EfsAccessPoint#uid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids">SecondaryGids</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}. |

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.gid"></a>

```csharp
public double Gid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#gid EfsAccessPoint#gid}.

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.uid"></a>

```csharp
public double Uid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#uid EfsAccessPoint#uid}.

---

##### `SecondaryGids`<sup>Optional</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids"></a>

```csharp
public double[] SecondaryGids { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}.

---

### EfsAccessPointRootDirectory <a name="EfsAccessPointRootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPointRootDirectory {
    EfsAccessPointRootDirectoryCreationInfo CreationInfo = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo">CreationInfo</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | creation_info block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#path EfsAccessPoint#path}. |

---

##### `CreationInfo`<sup>Optional</sup> <a name="CreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo"></a>

```csharp
public EfsAccessPointRootDirectoryCreationInfo CreationInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

creation_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#creation_info EfsAccessPoint#creation_info}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#path EfsAccessPoint#path}.

---

### EfsAccessPointRootDirectoryCreationInfo <a name="EfsAccessPointRootDirectoryCreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPointRootDirectoryCreationInfo {
    double OwnerGid,
    double OwnerUid,
    string Permissions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid">OwnerGid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_gid EfsAccessPoint#owner_gid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid">OwnerUid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_uid EfsAccessPoint#owner_uid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions">Permissions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#permissions EfsAccessPoint#permissions}. |

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid"></a>

```csharp
public double OwnerGid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_gid EfsAccessPoint#owner_gid}.

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid"></a>

```csharp
public double OwnerUid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_uid EfsAccessPoint#owner_uid}.

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#permissions EfsAccessPoint#permissions}.

---

## Classes <a name="Classes" id="Classes"></a>

### EfsAccessPointPosixUserOutputReference <a name="EfsAccessPointPosixUserOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPointPosixUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids">ResetSecondaryGids</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryGids` <a name="ResetSecondaryGids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```csharp
private void ResetSecondaryGids()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput">GidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput">SecondaryGidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput">UidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid">Gid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid">Uid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput"></a>

```csharp
public double GidInput { get; }
```

- *Type:* double

---

##### `SecondaryGidsInput`<sup>Optional</sup> <a name="SecondaryGidsInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```csharp
public double[] SecondaryGidsInput { get; }
```

- *Type:* double[]

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput"></a>

```csharp
public double UidInput { get; }
```

- *Type:* double

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid"></a>

```csharp
public double Gid { get; }
```

- *Type:* double

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```csharp
public double[] SecondaryGids { get; }
```

- *Type:* double[]

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid"></a>

```csharp
public double Uid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue"></a>

```csharp
public EfsAccessPointPosixUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---


### EfsAccessPointRootDirectoryCreationInfoOutputReference <a name="EfsAccessPointRootDirectoryCreationInfoOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPointRootDirectoryCreationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput">OwnerGidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput">OwnerUidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid">OwnerGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid">OwnerUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OwnerGidInput`<sup>Optional</sup> <a name="OwnerGidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput"></a>

```csharp
public double OwnerGidInput { get; }
```

- *Type:* double

---

##### `OwnerUidInput`<sup>Optional</sup> <a name="OwnerUidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput"></a>

```csharp
public double OwnerUidInput { get; }
```

- *Type:* double

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid"></a>

```csharp
public double OwnerGid { get; }
```

- *Type:* double

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid"></a>

```csharp
public double OwnerUid { get; }
```

- *Type:* double

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue"></a>

```csharp
public EfsAccessPointRootDirectoryCreationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---


### EfsAccessPointRootDirectoryOutputReference <a name="EfsAccessPointRootDirectoryOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsAccessPointRootDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo">PutCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo">ResetCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreationInfo` <a name="PutCreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo"></a>

```csharp
private void PutCreationInfo(EfsAccessPointRootDirectoryCreationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `ResetCreationInfo` <a name="ResetCreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo"></a>

```csharp
private void ResetCreationInfo()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo">CreationInfo</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput">CreationInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationInfo`<sup>Required</sup> <a name="CreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo"></a>

```csharp
public EfsAccessPointRootDirectoryCreationInfoOutputReference CreationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a>

---

##### `CreationInfoInput`<sup>Optional</sup> <a name="CreationInfoInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput"></a>

```csharp
public EfsAccessPointRootDirectoryCreationInfo CreationInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```csharp
public EfsAccessPointRootDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---



