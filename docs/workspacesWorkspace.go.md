# `workspacesWorkspace` Submodule <a name="`workspacesWorkspace` Submodule" id="@cdktf/provider-aws.workspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspace <a name="WorkspacesWorkspace" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

workspacesworkspace.NewWorkspacesWorkspace(scope Construct, id *string, config WorkspacesWorkspaceConfig) WorkspacesWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig">WorkspacesWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts"></a>

```go
func PutTimeouts(value WorkspacesWorkspaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

---

##### `PutWorkspaceProperties` <a name="PutWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties"></a>

```go
func PutWorkspaceProperties(value WorkspacesWorkspaceWorkspaceProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetId"></a>

```go
func ResetId()
```

##### `ResetRootVolumeEncryptionEnabled` <a name="ResetRootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetRootVolumeEncryptionEnabled"></a>

```go
func ResetRootVolumeEncryptionEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserVolumeEncryptionEnabled` <a name="ResetUserVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetUserVolumeEncryptionEnabled"></a>

```go
func ResetUserVolumeEncryptionEnabled()
```

##### `ResetVolumeEncryptionKey` <a name="ResetVolumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetVolumeEncryptionKey"></a>

```go
func ResetVolumeEncryptionKey()
```

##### `ResetWorkspaceProperties` <a name="ResetWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetWorkspaceProperties"></a>

```go
func ResetWorkspaceProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

workspacesworkspace.WorkspacesWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

workspacesworkspace.WorkspacesWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

workspacesworkspace.WorkspacesWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName">ComputerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties">WorkspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput">RootVolumeEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput">UserVolumeEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput">VolumeEncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput">WorkspacePropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled">RootVolumeEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled">UserVolumeEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey">VolumeEncryptionKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName"></a>

```go
func ComputerName() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts"></a>

```go
func Timeouts() WorkspacesWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a>

---

##### `WorkspaceProperties`<sup>Required</sup> <a name="WorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties"></a>

```go
func WorkspaceProperties() WorkspacesWorkspaceWorkspacePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a>

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RootVolumeEncryptionEnabledInput`<sup>Optional</sup> <a name="RootVolumeEncryptionEnabledInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput"></a>

```go
func RootVolumeEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `UserVolumeEncryptionEnabledInput`<sup>Optional</sup> <a name="UserVolumeEncryptionEnabledInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput"></a>

```go
func UserVolumeEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeEncryptionKeyInput`<sup>Optional</sup> <a name="VolumeEncryptionKeyInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput"></a>

```go
func VolumeEncryptionKeyInput() *string
```

- *Type:* *string

---

##### `WorkspacePropertiesInput`<sup>Optional</sup> <a name="WorkspacePropertiesInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput"></a>

```go
func WorkspacePropertiesInput() WorkspacesWorkspaceWorkspaceProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RootVolumeEncryptionEnabled`<sup>Required</sup> <a name="RootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```go
func RootVolumeEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `UserVolumeEncryptionEnabled`<sup>Required</sup> <a name="UserVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```go
func UserVolumeEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `VolumeEncryptionKey`<sup>Required</sup> <a name="VolumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey"></a>

```go
func VolumeEncryptionKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspaceConfig <a name="WorkspacesWorkspaceConfig" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

&workspacesworkspace.WorkspacesWorkspaceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BundleId: *string,
	DirectoryId: *string,
	UserName: *string,
	Id: *string,
	RootVolumeEncryptionEnabled: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts,
	UserVolumeEncryptionEnabled: interface{},
	VolumeEncryptionKey: *string,
	WorkspaceProperties: github.com/cdktf/cdktf-provider-aws-go/aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled">RootVolumeEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled">UserVolumeEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey">VolumeEncryptionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties">WorkspaceProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | workspace_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RootVolumeEncryptionEnabled`<sup>Optional</sup> <a name="RootVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled"></a>

```go
RootVolumeEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts"></a>

```go
Timeouts WorkspacesWorkspaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}

---

##### `UserVolumeEncryptionEnabled`<sup>Optional</sup> <a name="UserVolumeEncryptionEnabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled"></a>

```go
UserVolumeEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}.

---

##### `VolumeEncryptionKey`<sup>Optional</sup> <a name="VolumeEncryptionKey" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey"></a>

```go
VolumeEncryptionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}.

---

##### `WorkspaceProperties`<sup>Optional</sup> <a name="WorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties"></a>

```go
WorkspaceProperties WorkspacesWorkspaceWorkspaceProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

workspace_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}

---

### WorkspacesWorkspaceTimeouts <a name="WorkspacesWorkspaceTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

&workspacesworkspace.WorkspacesWorkspaceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}.

---

### WorkspacesWorkspaceWorkspaceProperties <a name="WorkspacesWorkspaceWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

&workspacesworkspace.WorkspacesWorkspaceWorkspaceProperties {
	ComputeTypeName: *string,
	RootVolumeSizeGib: *f64,
	RunningMode: *string,
	RunningModeAutoStopTimeoutInMinutes: *f64,
	UserVolumeSizeGib: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName">ComputeTypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib">RootVolumeSizeGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode">RunningMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes">RunningModeAutoStopTimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib">UserVolumeSizeGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}. |

---

##### `ComputeTypeName`<sup>Optional</sup> <a name="ComputeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName"></a>

```go
ComputeTypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}.

---

##### `RootVolumeSizeGib`<sup>Optional</sup> <a name="RootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib"></a>

```go
RootVolumeSizeGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}.

---

##### `RunningMode`<sup>Optional</sup> <a name="RunningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode"></a>

```go
RunningMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}.

---

##### `RunningModeAutoStopTimeoutInMinutes`<sup>Optional</sup> <a name="RunningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes"></a>

```go
RunningModeAutoStopTimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}.

---

##### `UserVolumeSizeGib`<sup>Optional</sup> <a name="UserVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib"></a>

```go
UserVolumeSizeGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspaceTimeoutsOutputReference <a name="WorkspacesWorkspaceTimeoutsOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

workspacesworkspace.NewWorkspacesWorkspaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesWorkspaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="WorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/workspacesworkspace"

workspacesworkspace.NewWorkspacesWorkspaceWorkspacePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesWorkspaceWorkspacePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeTypeName` <a name="ResetComputeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetComputeTypeName"></a>

```go
func ResetComputeTypeName()
```

##### `ResetRootVolumeSizeGib` <a name="ResetRootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRootVolumeSizeGib"></a>

```go
func ResetRootVolumeSizeGib()
```

##### `ResetRunningMode` <a name="ResetRunningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningMode"></a>

```go
func ResetRunningMode()
```

##### `ResetRunningModeAutoStopTimeoutInMinutes` <a name="ResetRunningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningModeAutoStopTimeoutInMinutes"></a>

```go
func ResetRunningModeAutoStopTimeoutInMinutes()
```

##### `ResetUserVolumeSizeGib` <a name="ResetUserVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetUserVolumeSizeGib"></a>

```go
func ResetUserVolumeSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput">ComputeTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput">RootVolumeSizeGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput">RunningModeAutoStopTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput">RunningModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput">UserVolumeSizeGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">ComputeTypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">RootVolumeSizeGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">RunningMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">RunningModeAutoStopTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">UserVolumeSizeGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeTypeNameInput`<sup>Optional</sup> <a name="ComputeTypeNameInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput"></a>

```go
func ComputeTypeNameInput() *string
```

- *Type:* *string

---

##### `RootVolumeSizeGibInput`<sup>Optional</sup> <a name="RootVolumeSizeGibInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput"></a>

```go
func RootVolumeSizeGibInput() *f64
```

- *Type:* *f64

---

##### `RunningModeAutoStopTimeoutInMinutesInput`<sup>Optional</sup> <a name="RunningModeAutoStopTimeoutInMinutesInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput"></a>

```go
func RunningModeAutoStopTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `RunningModeInput`<sup>Optional</sup> <a name="RunningModeInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput"></a>

```go
func RunningModeInput() *string
```

- *Type:* *string

---

##### `UserVolumeSizeGibInput`<sup>Optional</sup> <a name="UserVolumeSizeGibInput" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput"></a>

```go
func UserVolumeSizeGibInput() *f64
```

- *Type:* *f64

---

##### `ComputeTypeName`<sup>Required</sup> <a name="ComputeTypeName" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```go
func ComputeTypeName() *string
```

- *Type:* *string

---

##### `RootVolumeSizeGib`<sup>Required</sup> <a name="RootVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```go
func RootVolumeSizeGib() *f64
```

- *Type:* *f64

---

##### `RunningMode`<sup>Required</sup> <a name="RunningMode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```go
func RunningMode() *string
```

- *Type:* *string

---

##### `RunningModeAutoStopTimeoutInMinutes`<sup>Required</sup> <a name="RunningModeAutoStopTimeoutInMinutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```go
func RunningModeAutoStopTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `UserVolumeSizeGib`<sup>Required</sup> <a name="UserVolumeSizeGib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```go
func UserVolumeSizeGib() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesWorkspaceWorkspaceProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---



