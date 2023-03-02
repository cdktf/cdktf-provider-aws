# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktf/provider-aws.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory aws_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectory(Construct Scope, string Id, WorkspacesDirectoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions">PutSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">PutWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">PutWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">ResetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions">ResetSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">ResetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">ResetWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSelfServicePermissions` <a name="PutSelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions"></a>

```csharp
private void PutSelfServicePermissions(WorkspacesDirectorySelfServicePermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `PutWorkspaceAccessProperties` <a name="PutWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```csharp
private void PutWorkspaceAccessProperties(WorkspacesDirectoryWorkspaceAccessProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `PutWorkspaceCreationProperties` <a name="PutWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```csharp
private void PutWorkspaceCreationProperties(WorkspacesDirectoryWorkspaceCreationProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpGroupIds` <a name="ResetIpGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```csharp
private void ResetIpGroupIds()
```

##### `ResetSelfServicePermissions` <a name="ResetSelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions"></a>

```csharp
private void ResetSelfServicePermissions()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWorkspaceAccessProperties` <a name="ResetWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```csharp
private void ResetWorkspaceAccessProperties()
```

##### `ResetWorkspaceCreationProperties` <a name="ResetWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```csharp
private void ResetWorkspaceCreationProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspacesDirectory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspacesDirectory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorkspacesDirectory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName">CustomerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType">DirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">IamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode">RegistrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions">SelfServicePermissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">WorkspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">IpGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput">SelfServicePermissionsInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">WorkspaceAccessPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">WorkspaceCreationPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">IpGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CustomerUserName`<sup>Required</sup> <a name="CustomerUserName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```csharp
public string CustomerUserName { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```csharp
public string DirectoryType { get; }
```

- *Type:* string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```csharp
public string[] DnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```csharp
public string IamRoleId { get; }
```

- *Type:* string

---

##### `RegistrationCode`<sup>Required</sup> <a name="RegistrationCode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```csharp
public string RegistrationCode { get; }
```

- *Type:* string

---

##### `SelfServicePermissions`<sup>Required</sup> <a name="SelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions"></a>

```csharp
public WorkspacesDirectorySelfServicePermissionsOutputReference SelfServicePermissions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a>

---

##### `WorkspaceAccessProperties`<sup>Required</sup> <a name="WorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference WorkspaceAccessProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `WorkspaceCreationProperties`<sup>Required</sup> <a name="WorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference WorkspaceCreationProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `WorkspaceSecurityGroupId`<sup>Required</sup> <a name="WorkspaceSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```csharp
public string WorkspaceSecurityGroupId { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpGroupIdsInput`<sup>Optional</sup> <a name="IpGroupIdsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```csharp
public string[] IpGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SelfServicePermissionsInput`<sup>Optional</sup> <a name="SelfServicePermissionsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput"></a>

```csharp
public WorkspacesDirectorySelfServicePermissions SelfServicePermissionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceAccessPropertiesInput`<sup>Optional</sup> <a name="WorkspaceAccessPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessProperties WorkspaceAccessPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `WorkspaceCreationPropertiesInput`<sup>Optional</sup> <a name="WorkspaceCreationPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```csharp
public WorkspacesDirectoryWorkspaceCreationProperties WorkspaceCreationPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpGroupIds`<sup>Required</sup> <a name="IpGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```csharp
public string[] IpGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectoryConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DirectoryId,
    string Id = null,
    string[] IpGroupIds = null,
    WorkspacesDirectorySelfServicePermissions SelfServicePermissions = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    WorkspacesDirectoryWorkspaceAccessProperties WorkspaceAccessProperties = null,
    WorkspacesDirectoryWorkspaceCreationProperties WorkspaceCreationProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">IpGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions">SelfServicePermissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | self_service_permissions block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | workspace_access_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | workspace_creation_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpGroupIds`<sup>Optional</sup> <a name="IpGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```csharp
public string[] IpGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}.

---

##### `SelfServicePermissions`<sup>Optional</sup> <a name="SelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions"></a>

```csharp
public WorkspacesDirectorySelfServicePermissions SelfServicePermissions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

self_service_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}.

---

##### `WorkspaceAccessProperties`<sup>Optional</sup> <a name="WorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessProperties WorkspaceAccessProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

workspace_access_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `WorkspaceCreationProperties`<sup>Optional</sup> <a name="WorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```csharp
public WorkspacesDirectoryWorkspaceCreationProperties WorkspaceCreationProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

workspace_creation_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

### WorkspacesDirectorySelfServicePermissions <a name="WorkspacesDirectorySelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectorySelfServicePermissions {
    object ChangeComputeType = null,
    object IncreaseVolumeSize = null,
    object RebuildWorkspace = null,
    object RestartWorkspace = null,
    object SwitchRunningMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType">ChangeComputeType</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace">RestartWorkspace</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode">SwitchRunningMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}. |

---

##### `ChangeComputeType`<sup>Optional</sup> <a name="ChangeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType"></a>

```csharp
public object ChangeComputeType { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}.

---

##### `IncreaseVolumeSize`<sup>Optional</sup> <a name="IncreaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize"></a>

```csharp
public object IncreaseVolumeSize { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}.

---

##### `RebuildWorkspace`<sup>Optional</sup> <a name="RebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace"></a>

```csharp
public object RebuildWorkspace { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}.

---

##### `RestartWorkspace`<sup>Optional</sup> <a name="RestartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace"></a>

```csharp
public object RestartWorkspace { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}.

---

##### `SwitchRunningMode`<sup>Optional</sup> <a name="SwitchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode"></a>

```csharp
public object SwitchRunningMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}.

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectoryWorkspaceAccessProperties {
    string DeviceTypeAndroid = null,
    string DeviceTypeChromeos = null,
    string DeviceTypeIos = null,
    string DeviceTypeLinux = null,
    string DeviceTypeOsx = null,
    string DeviceTypeWeb = null,
    string DeviceTypeWindows = null,
    string DeviceTypeZeroclient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos">DeviceTypeChromeos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient">DeviceTypeZeroclient</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}. |

---

##### `DeviceTypeAndroid`<sup>Optional</sup> <a name="DeviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```csharp
public string DeviceTypeAndroid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}.

---

##### `DeviceTypeChromeos`<sup>Optional</sup> <a name="DeviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos"></a>

```csharp
public string DeviceTypeChromeos { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}.

---

##### `DeviceTypeIos`<sup>Optional</sup> <a name="DeviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```csharp
public string DeviceTypeIos { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}.

---

##### `DeviceTypeLinux`<sup>Optional</sup> <a name="DeviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```csharp
public string DeviceTypeLinux { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}.

---

##### `DeviceTypeOsx`<sup>Optional</sup> <a name="DeviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```csharp
public string DeviceTypeOsx { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}.

---

##### `DeviceTypeWeb`<sup>Optional</sup> <a name="DeviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```csharp
public string DeviceTypeWeb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}.

---

##### `DeviceTypeWindows`<sup>Optional</sup> <a name="DeviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```csharp
public string DeviceTypeWindows { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}.

---

##### `DeviceTypeZeroclient`<sup>Optional</sup> <a name="DeviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient"></a>

```csharp
public string DeviceTypeZeroclient { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}.

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectoryWorkspaceCreationProperties {
    string CustomSecurityGroupId = null,
    string DefaultOu = null,
    object EnableInternetAccess = null,
    object EnableMaintenanceMode = null,
    object UserEnabledAsLocalAdministrator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">DefaultOu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}. |

---

##### `CustomSecurityGroupId`<sup>Optional</sup> <a name="CustomSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```csharp
public string CustomSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}.

---

##### `DefaultOu`<sup>Optional</sup> <a name="DefaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```csharp
public string DefaultOu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}.

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```csharp
public object EnableInternetAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}.

---

##### `EnableMaintenanceMode`<sup>Optional</sup> <a name="EnableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```csharp
public object EnableMaintenanceMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}.

---

##### `UserEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```csharp
public object UserEnabledAsLocalAdministrator { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectorySelfServicePermissionsOutputReference <a name="WorkspacesDirectorySelfServicePermissionsOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectorySelfServicePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType">ResetChangeComputeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize">ResetIncreaseVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace">ResetRebuildWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace">ResetRestartWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode">ResetSwitchRunningMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeComputeType` <a name="ResetChangeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType"></a>

```csharp
private void ResetChangeComputeType()
```

##### `ResetIncreaseVolumeSize` <a name="ResetIncreaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```csharp
private void ResetIncreaseVolumeSize()
```

##### `ResetRebuildWorkspace` <a name="ResetRebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace"></a>

```csharp
private void ResetRebuildWorkspace()
```

##### `ResetRestartWorkspace` <a name="ResetRestartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace"></a>

```csharp
private void ResetRestartWorkspace()
```

##### `ResetSwitchRunningMode` <a name="ResetSwitchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode"></a>

```csharp
private void ResetSwitchRunningMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput">ChangeComputeTypeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput">IncreaseVolumeSizeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput">RebuildWorkspaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput">RestartWorkspaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput">SwitchRunningModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType">ChangeComputeType</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace">RestartWorkspace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode">SwitchRunningMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeComputeTypeInput`<sup>Optional</sup> <a name="ChangeComputeTypeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```csharp
public object ChangeComputeTypeInput { get; }
```

- *Type:* object

---

##### `IncreaseVolumeSizeInput`<sup>Optional</sup> <a name="IncreaseVolumeSizeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```csharp
public object IncreaseVolumeSizeInput { get; }
```

- *Type:* object

---

##### `RebuildWorkspaceInput`<sup>Optional</sup> <a name="RebuildWorkspaceInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```csharp
public object RebuildWorkspaceInput { get; }
```

- *Type:* object

---

##### `RestartWorkspaceInput`<sup>Optional</sup> <a name="RestartWorkspaceInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```csharp
public object RestartWorkspaceInput { get; }
```

- *Type:* object

---

##### `SwitchRunningModeInput`<sup>Optional</sup> <a name="SwitchRunningModeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput"></a>

```csharp
public object SwitchRunningModeInput { get; }
```

- *Type:* object

---

##### `ChangeComputeType`<sup>Required</sup> <a name="ChangeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType"></a>

```csharp
public object ChangeComputeType { get; }
```

- *Type:* object

---

##### `IncreaseVolumeSize`<sup>Required</sup> <a name="IncreaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize"></a>

```csharp
public object IncreaseVolumeSize { get; }
```

- *Type:* object

---

##### `RebuildWorkspace`<sup>Required</sup> <a name="RebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace"></a>

```csharp
public object RebuildWorkspace { get; }
```

- *Type:* object

---

##### `RestartWorkspace`<sup>Required</sup> <a name="RestartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace"></a>

```csharp
public object RestartWorkspace { get; }
```

- *Type:* object

---

##### `SwitchRunningMode`<sup>Required</sup> <a name="SwitchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode"></a>

```csharp
public object SwitchRunningMode { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue"></a>

```csharp
public WorkspacesDirectorySelfServicePermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">ResetDeviceTypeAndroid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos">ResetDeviceTypeChromeos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">ResetDeviceTypeIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">ResetDeviceTypeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">ResetDeviceTypeOsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">ResetDeviceTypeWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">ResetDeviceTypeWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient">ResetDeviceTypeZeroclient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceTypeAndroid` <a name="ResetDeviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```csharp
private void ResetDeviceTypeAndroid()
```

##### `ResetDeviceTypeChromeos` <a name="ResetDeviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos"></a>

```csharp
private void ResetDeviceTypeChromeos()
```

##### `ResetDeviceTypeIos` <a name="ResetDeviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```csharp
private void ResetDeviceTypeIos()
```

##### `ResetDeviceTypeLinux` <a name="ResetDeviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```csharp
private void ResetDeviceTypeLinux()
```

##### `ResetDeviceTypeOsx` <a name="ResetDeviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```csharp
private void ResetDeviceTypeOsx()
```

##### `ResetDeviceTypeWeb` <a name="ResetDeviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```csharp
private void ResetDeviceTypeWeb()
```

##### `ResetDeviceTypeWindows` <a name="ResetDeviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```csharp
private void ResetDeviceTypeWindows()
```

##### `ResetDeviceTypeZeroclient` <a name="ResetDeviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient"></a>

```csharp
private void ResetDeviceTypeZeroclient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">DeviceTypeAndroidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput">DeviceTypeChromeosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">DeviceTypeIosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">DeviceTypeLinuxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">DeviceTypeOsxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">DeviceTypeWebInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">DeviceTypeWindowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput">DeviceTypeZeroclientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos">DeviceTypeChromeos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient">DeviceTypeZeroclient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceTypeAndroidInput`<sup>Optional</sup> <a name="DeviceTypeAndroidInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```csharp
public string DeviceTypeAndroidInput { get; }
```

- *Type:* string

---

##### `DeviceTypeChromeosInput`<sup>Optional</sup> <a name="DeviceTypeChromeosInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput"></a>

```csharp
public string DeviceTypeChromeosInput { get; }
```

- *Type:* string

---

##### `DeviceTypeIosInput`<sup>Optional</sup> <a name="DeviceTypeIosInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```csharp
public string DeviceTypeIosInput { get; }
```

- *Type:* string

---

##### `DeviceTypeLinuxInput`<sup>Optional</sup> <a name="DeviceTypeLinuxInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```csharp
public string DeviceTypeLinuxInput { get; }
```

- *Type:* string

---

##### `DeviceTypeOsxInput`<sup>Optional</sup> <a name="DeviceTypeOsxInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```csharp
public string DeviceTypeOsxInput { get; }
```

- *Type:* string

---

##### `DeviceTypeWebInput`<sup>Optional</sup> <a name="DeviceTypeWebInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```csharp
public string DeviceTypeWebInput { get; }
```

- *Type:* string

---

##### `DeviceTypeWindowsInput`<sup>Optional</sup> <a name="DeviceTypeWindowsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```csharp
public string DeviceTypeWindowsInput { get; }
```

- *Type:* string

---

##### `DeviceTypeZeroclientInput`<sup>Optional</sup> <a name="DeviceTypeZeroclientInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput"></a>

```csharp
public string DeviceTypeZeroclientInput { get; }
```

- *Type:* string

---

##### `DeviceTypeAndroid`<sup>Required</sup> <a name="DeviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```csharp
public string DeviceTypeAndroid { get; }
```

- *Type:* string

---

##### `DeviceTypeChromeos`<sup>Required</sup> <a name="DeviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos"></a>

```csharp
public string DeviceTypeChromeos { get; }
```

- *Type:* string

---

##### `DeviceTypeIos`<sup>Required</sup> <a name="DeviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```csharp
public string DeviceTypeIos { get; }
```

- *Type:* string

---

##### `DeviceTypeLinux`<sup>Required</sup> <a name="DeviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```csharp
public string DeviceTypeLinux { get; }
```

- *Type:* string

---

##### `DeviceTypeOsx`<sup>Required</sup> <a name="DeviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```csharp
public string DeviceTypeOsx { get; }
```

- *Type:* string

---

##### `DeviceTypeWeb`<sup>Required</sup> <a name="DeviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```csharp
public string DeviceTypeWeb { get; }
```

- *Type:* string

---

##### `DeviceTypeWindows`<sup>Required</sup> <a name="DeviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```csharp
public string DeviceTypeWindows { get; }
```

- *Type:* string

---

##### `DeviceTypeZeroclient`<sup>Required</sup> <a name="DeviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient"></a>

```csharp
public string DeviceTypeZeroclient { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```csharp
public WorkspacesDirectoryWorkspaceAccessProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">ResetCustomSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">ResetDefaultOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">ResetEnableMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">ResetUserEnabledAsLocalAdministrator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSecurityGroupId` <a name="ResetCustomSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```csharp
private void ResetCustomSecurityGroupId()
```

##### `ResetDefaultOu` <a name="ResetDefaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```csharp
private void ResetDefaultOu()
```

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```csharp
private void ResetEnableInternetAccess()
```

##### `ResetEnableMaintenanceMode` <a name="ResetEnableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```csharp
private void ResetEnableMaintenanceMode()
```

##### `ResetUserEnabledAsLocalAdministrator` <a name="ResetUserEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```csharp
private void ResetUserEnabledAsLocalAdministrator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">CustomSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">DefaultOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">EnableMaintenanceModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">UserEnabledAsLocalAdministratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">DefaultOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSecurityGroupIdInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```csharp
public string CustomSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `DefaultOuInput`<sup>Optional</sup> <a name="DefaultOuInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```csharp
public string DefaultOuInput { get; }
```

- *Type:* string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```csharp
public object EnableInternetAccessInput { get; }
```

- *Type:* object

---

##### `EnableMaintenanceModeInput`<sup>Optional</sup> <a name="EnableMaintenanceModeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```csharp
public object EnableMaintenanceModeInput { get; }
```

- *Type:* object

---

##### `UserEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministratorInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```csharp
public object UserEnabledAsLocalAdministratorInput { get; }
```

- *Type:* object

---

##### `CustomSecurityGroupId`<sup>Required</sup> <a name="CustomSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```csharp
public string CustomSecurityGroupId { get; }
```

- *Type:* string

---

##### `DefaultOu`<sup>Required</sup> <a name="DefaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```csharp
public string DefaultOu { get; }
```

- *Type:* string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```csharp
public object EnableInternetAccess { get; }
```

- *Type:* object

---

##### `EnableMaintenanceMode`<sup>Required</sup> <a name="EnableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```csharp
public object EnableMaintenanceMode { get; }
```

- *Type:* object

---

##### `UserEnabledAsLocalAdministrator`<sup>Required</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```csharp
public object UserEnabledAsLocalAdministrator { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```csharp
public WorkspacesDirectoryWorkspaceCreationProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



