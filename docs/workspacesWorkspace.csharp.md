# `workspacesWorkspace` Submodule <a name="`workspacesWorkspace` Submodule" id="@cdktf/provider-aws.workspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspace <a name="WorkspacesWorkspace" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesWorkspace(Construct Scope, string Id, WorkspacesWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig">WorkspacesWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig">WorkspacesWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties">PutWorkspaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetRootVolumeEncryptionEnabled">ResetRootVolumeEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetUserVolumeEncryptionEnabled">ResetUserVolumeEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetVolumeEncryptionKey">ResetVolumeEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetWorkspaceProperties">ResetWorkspaceProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkspacesWorkspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

---

##### `PutWorkspaceProperties` <a name="PutWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties"></a>

```csharp
private void PutWorkspaceProperties(WorkspacesWorkspaceWorkspaceProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRootVolumeEncryptionEnabled` <a name="ResetRootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetRootVolumeEncryptionEnabled"></a>

```csharp
private void ResetRootVolumeEncryptionEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserVolumeEncryptionEnabled` <a name="ResetUserVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetUserVolumeEncryptionEnabled"></a>

```csharp
private void ResetUserVolumeEncryptionEnabled()
```

##### `ResetVolumeEncryptionKey` <a name="ResetVolumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetVolumeEncryptionKey"></a>

```csharp
private void ResetVolumeEncryptionKey()
```

##### `ResetWorkspaceProperties` <a name="ResetWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetWorkspaceProperties"></a>

```csharp
private void ResetWorkspaceProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspacesWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspacesWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspacesWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName">ComputerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties">WorkspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput">RootVolumeEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput">UserVolumeEncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput">VolumeEncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput">WorkspacePropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled">RootVolumeEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled">UserVolumeEncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey">VolumeEncryptionKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName"></a>

```csharp
public string ComputerName { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts"></a>

```csharp
public WorkspacesWorkspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a>

---

##### `WorkspaceProperties`<sup>Required</sup> <a name="WorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties"></a>

```csharp
public WorkspacesWorkspaceWorkspacePropertiesOutputReference WorkspaceProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a>

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RootVolumeEncryptionEnabledInput`<sup>Optional</sup> <a name="RootVolumeEncryptionEnabledInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput"></a>

```csharp
public object RootVolumeEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `UserVolumeEncryptionEnabledInput`<sup>Optional</sup> <a name="UserVolumeEncryptionEnabledInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput"></a>

```csharp
public object UserVolumeEncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `VolumeEncryptionKeyInput`<sup>Optional</sup> <a name="VolumeEncryptionKeyInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput"></a>

```csharp
public string VolumeEncryptionKeyInput { get; }
```

- *Type:* string

---

##### `WorkspacePropertiesInput`<sup>Optional</sup> <a name="WorkspacePropertiesInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput"></a>

```csharp
public WorkspacesWorkspaceWorkspaceProperties WorkspacePropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RootVolumeEncryptionEnabled`<sup>Required</sup> <a name="RootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```csharp
public object RootVolumeEncryptionEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `UserVolumeEncryptionEnabled`<sup>Required</sup> <a name="UserVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```csharp
public object UserVolumeEncryptionEnabled { get; }
```

- *Type:* object

---

##### `VolumeEncryptionKey`<sup>Required</sup> <a name="VolumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey"></a>

```csharp
public string VolumeEncryptionKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspaceConfig <a name="WorkspacesWorkspaceConfig" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesWorkspaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BundleId,
    string DirectoryId,
    string UserName,
    string Id = null,
    object RootVolumeEncryptionEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    WorkspacesWorkspaceTimeouts Timeouts = null,
    object UserVolumeEncryptionEnabled = null,
    string VolumeEncryptionKey = null,
    WorkspacesWorkspaceWorkspaceProperties WorkspaceProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId">BundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled">RootVolumeEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled">UserVolumeEncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey">VolumeEncryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties">WorkspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | workspace_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RootVolumeEncryptionEnabled`<sup>Optional</sup> <a name="RootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled"></a>

```csharp
public object RootVolumeEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts"></a>

```csharp
public WorkspacesWorkspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}

---

##### `UserVolumeEncryptionEnabled`<sup>Optional</sup> <a name="UserVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled"></a>

```csharp
public object UserVolumeEncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}.

---

##### `VolumeEncryptionKey`<sup>Optional</sup> <a name="VolumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey"></a>

```csharp
public string VolumeEncryptionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}.

---

##### `WorkspaceProperties`<sup>Optional</sup> <a name="WorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties"></a>

```csharp
public WorkspacesWorkspaceWorkspaceProperties WorkspaceProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

workspace_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}

---

### WorkspacesWorkspaceTimeouts <a name="WorkspacesWorkspaceTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesWorkspaceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}.

---

### WorkspacesWorkspaceWorkspaceProperties <a name="WorkspacesWorkspaceWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesWorkspaceWorkspaceProperties {
    string ComputeTypeName = null,
    double RootVolumeSizeGib = null,
    string RunningMode = null,
    double RunningModeAutoStopTimeoutInMinutes = null,
    double UserVolumeSizeGib = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName">ComputeTypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib">RootVolumeSizeGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode">RunningMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes">RunningModeAutoStopTimeoutInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib">UserVolumeSizeGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}. |

---

##### `ComputeTypeName`<sup>Optional</sup> <a name="ComputeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName"></a>

```csharp
public string ComputeTypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}.

---

##### `RootVolumeSizeGib`<sup>Optional</sup> <a name="RootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib"></a>

```csharp
public double RootVolumeSizeGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}.

---

##### `RunningMode`<sup>Optional</sup> <a name="RunningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode"></a>

```csharp
public string RunningMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}.

---

##### `RunningModeAutoStopTimeoutInMinutes`<sup>Optional</sup> <a name="RunningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes"></a>

```csharp
public double RunningModeAutoStopTimeoutInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}.

---

##### `UserVolumeSizeGib`<sup>Optional</sup> <a name="UserVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib"></a>

```csharp
public double UserVolumeSizeGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspaceTimeoutsOutputReference <a name="WorkspacesWorkspaceTimeoutsOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesWorkspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="WorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesWorkspaceWorkspacePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetComputeTypeName">ResetComputeTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRootVolumeSizeGib">ResetRootVolumeSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningMode">ResetRunningMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningModeAutoStopTimeoutInMinutes">ResetRunningModeAutoStopTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetUserVolumeSizeGib">ResetUserVolumeSizeGib</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeTypeName` <a name="ResetComputeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetComputeTypeName"></a>

```csharp
private void ResetComputeTypeName()
```

##### `ResetRootVolumeSizeGib` <a name="ResetRootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRootVolumeSizeGib"></a>

```csharp
private void ResetRootVolumeSizeGib()
```

##### `ResetRunningMode` <a name="ResetRunningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningMode"></a>

```csharp
private void ResetRunningMode()
```

##### `ResetRunningModeAutoStopTimeoutInMinutes` <a name="ResetRunningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningModeAutoStopTimeoutInMinutes"></a>

```csharp
private void ResetRunningModeAutoStopTimeoutInMinutes()
```

##### `ResetUserVolumeSizeGib` <a name="ResetUserVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetUserVolumeSizeGib"></a>

```csharp
private void ResetUserVolumeSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput">ComputeTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput">RootVolumeSizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput">RunningModeAutoStopTimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput">RunningModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput">UserVolumeSizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">ComputeTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">RootVolumeSizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">RunningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">RunningModeAutoStopTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">UserVolumeSizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeTypeNameInput`<sup>Optional</sup> <a name="ComputeTypeNameInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput"></a>

```csharp
public string ComputeTypeNameInput { get; }
```

- *Type:* string

---

##### `RootVolumeSizeGibInput`<sup>Optional</sup> <a name="RootVolumeSizeGibInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput"></a>

```csharp
public double RootVolumeSizeGibInput { get; }
```

- *Type:* double

---

##### `RunningModeAutoStopTimeoutInMinutesInput`<sup>Optional</sup> <a name="RunningModeAutoStopTimeoutInMinutesInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput"></a>

```csharp
public double RunningModeAutoStopTimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `RunningModeInput`<sup>Optional</sup> <a name="RunningModeInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput"></a>

```csharp
public string RunningModeInput { get; }
```

- *Type:* string

---

##### `UserVolumeSizeGibInput`<sup>Optional</sup> <a name="UserVolumeSizeGibInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput"></a>

```csharp
public double UserVolumeSizeGibInput { get; }
```

- *Type:* double

---

##### `ComputeTypeName`<sup>Required</sup> <a name="ComputeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```csharp
public string ComputeTypeName { get; }
```

- *Type:* string

---

##### `RootVolumeSizeGib`<sup>Required</sup> <a name="RootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```csharp
public double RootVolumeSizeGib { get; }
```

- *Type:* double

---

##### `RunningMode`<sup>Required</sup> <a name="RunningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```csharp
public string RunningMode { get; }
```

- *Type:* string

---

##### `RunningModeAutoStopTimeoutInMinutes`<sup>Required</sup> <a name="RunningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```csharp
public double RunningModeAutoStopTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `UserVolumeSizeGib`<sup>Required</sup> <a name="UserVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```csharp
public double UserVolumeSizeGib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```csharp
public WorkspacesWorkspaceWorkspaceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---



