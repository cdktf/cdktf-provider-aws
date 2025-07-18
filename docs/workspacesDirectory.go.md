# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktf/provider-aws.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory aws_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectory(scope Construct, id *string, config WorkspacesDirectoryConfig) WorkspacesDirectory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig">PutActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties">PutCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSamlProperties">PutSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions">PutSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">PutWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">PutWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig">ResetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties">ResetCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">ResetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSamlProperties">ResetSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions">ResetSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType">ResetUserIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">ResetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">ResetWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription">ResetWorkspaceDirectoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName">ResetWorkspaceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType">ResetWorkspaceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActiveDirectoryConfig` <a name="PutActiveDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig"></a>

```go
func PutActiveDirectoryConfig(value WorkspacesDirectoryActiveDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `PutCertificateBasedAuthProperties` <a name="PutCertificateBasedAuthProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties"></a>

```go
func PutCertificateBasedAuthProperties(value WorkspacesDirectoryCertificateBasedAuthProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `PutSamlProperties` <a name="PutSamlProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSamlProperties"></a>

```go
func PutSamlProperties(value WorkspacesDirectorySamlProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `PutSelfServicePermissions` <a name="PutSelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions"></a>

```go
func PutSelfServicePermissions(value WorkspacesDirectorySelfServicePermissions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `PutWorkspaceAccessProperties` <a name="PutWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```go
func PutWorkspaceAccessProperties(value WorkspacesDirectoryWorkspaceAccessProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `PutWorkspaceCreationProperties` <a name="PutWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```go
func PutWorkspaceCreationProperties(value WorkspacesDirectoryWorkspaceCreationProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `ResetActiveDirectoryConfig` <a name="ResetActiveDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig"></a>

```go
func ResetActiveDirectoryConfig()
```

##### `ResetCertificateBasedAuthProperties` <a name="ResetCertificateBasedAuthProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties"></a>

```go
func ResetCertificateBasedAuthProperties()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetDirectoryId"></a>

```go
func ResetDirectoryId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId"></a>

```go
func ResetId()
```

##### `ResetIpGroupIds` <a name="ResetIpGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```go
func ResetIpGroupIds()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSamlProperties` <a name="ResetSamlProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSamlProperties"></a>

```go
func ResetSamlProperties()
```

##### `ResetSelfServicePermissions` <a name="ResetSelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions"></a>

```go
func ResetSelfServicePermissions()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUserIdentityType` <a name="ResetUserIdentityType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType"></a>

```go
func ResetUserIdentityType()
```

##### `ResetWorkspaceAccessProperties` <a name="ResetWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```go
func ResetWorkspaceAccessProperties()
```

##### `ResetWorkspaceCreationProperties` <a name="ResetWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```go
func ResetWorkspaceCreationProperties()
```

##### `ResetWorkspaceDirectoryDescription` <a name="ResetWorkspaceDirectoryDescription" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription"></a>

```go
func ResetWorkspaceDirectoryDescription()
```

##### `ResetWorkspaceDirectoryName` <a name="ResetWorkspaceDirectoryName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName"></a>

```go
func ResetWorkspaceDirectoryName()
```

##### `ResetWorkspaceType` <a name="ResetWorkspaceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType"></a>

```go
func ResetWorkspaceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspacesDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkspacesDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspacesDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName">CustomerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName">DirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType">DirectoryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">IamRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode">RegistrationCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.samlProperties">SamlProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions">SelfServicePermissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">WorkspaceSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput">ActiveDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput">CertificateBasedAuthPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">IpGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput">SamlPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput">SelfServicePermissionsInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput">UserIdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">WorkspaceAccessPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">WorkspaceCreationPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput">WorkspaceDirectoryDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput">WorkspaceDirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput">WorkspaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">IpGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.userIdentityType">UserIdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription">WorkspaceDirectoryDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName">WorkspaceDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceType">WorkspaceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig"></a>

```go
func ActiveDirectoryConfig() WorkspacesDirectoryActiveDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `CertificateBasedAuthProperties`<sup>Required</sup> <a name="CertificateBasedAuthProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```go
func CertificateBasedAuthProperties() WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `CustomerUserName`<sup>Required</sup> <a name="CustomerUserName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```go
func CustomerUserName() *string
```

- *Type:* *string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```go
func DirectoryName() *string
```

- *Type:* *string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```go
func DirectoryType() *string
```

- *Type:* *string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```go
func DnsIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```go
func IamRoleId() *string
```

- *Type:* *string

---

##### `RegistrationCode`<sup>Required</sup> <a name="RegistrationCode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```go
func RegistrationCode() *string
```

- *Type:* *string

---

##### `SamlProperties`<sup>Required</sup> <a name="SamlProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.samlProperties"></a>

```go
func SamlProperties() WorkspacesDirectorySamlPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `SelfServicePermissions`<sup>Required</sup> <a name="SelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions"></a>

```go
func SelfServicePermissions() WorkspacesDirectorySelfServicePermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a>

---

##### `WorkspaceAccessProperties`<sup>Required</sup> <a name="WorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```go
func WorkspaceAccessProperties() WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `WorkspaceCreationProperties`<sup>Required</sup> <a name="WorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```go
func WorkspaceCreationProperties() WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `WorkspaceSecurityGroupId`<sup>Required</sup> <a name="WorkspaceSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```go
func WorkspaceSecurityGroupId() *string
```

- *Type:* *string

---

##### `ActiveDirectoryConfigInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput"></a>

```go
func ActiveDirectoryConfigInput() WorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `CertificateBasedAuthPropertiesInput`<sup>Optional</sup> <a name="CertificateBasedAuthPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput"></a>

```go
func CertificateBasedAuthPropertiesInput() WorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpGroupIdsInput`<sup>Optional</sup> <a name="IpGroupIdsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```go
func IpGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SamlPropertiesInput`<sup>Optional</sup> <a name="SamlPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput"></a>

```go
func SamlPropertiesInput() WorkspacesDirectorySamlProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `SelfServicePermissionsInput`<sup>Optional</sup> <a name="SelfServicePermissionsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput"></a>

```go
func SelfServicePermissionsInput() WorkspacesDirectorySelfServicePermissions
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserIdentityTypeInput`<sup>Optional</sup> <a name="UserIdentityTypeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput"></a>

```go
func UserIdentityTypeInput() *string
```

- *Type:* *string

---

##### `WorkspaceAccessPropertiesInput`<sup>Optional</sup> <a name="WorkspaceAccessPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```go
func WorkspaceAccessPropertiesInput() WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `WorkspaceCreationPropertiesInput`<sup>Optional</sup> <a name="WorkspaceCreationPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```go
func WorkspaceCreationPropertiesInput() WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `WorkspaceDirectoryDescriptionInput`<sup>Optional</sup> <a name="WorkspaceDirectoryDescriptionInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput"></a>

```go
func WorkspaceDirectoryDescriptionInput() *string
```

- *Type:* *string

---

##### `WorkspaceDirectoryNameInput`<sup>Optional</sup> <a name="WorkspaceDirectoryNameInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput"></a>

```go
func WorkspaceDirectoryNameInput() *string
```

- *Type:* *string

---

##### `WorkspaceTypeInput`<sup>Optional</sup> <a name="WorkspaceTypeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput"></a>

```go
func WorkspaceTypeInput() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpGroupIds`<sup>Required</sup> <a name="IpGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```go
func IpGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserIdentityType`<sup>Required</sup> <a name="UserIdentityType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.userIdentityType"></a>

```go
func UserIdentityType() *string
```

- *Type:* *string

---

##### `WorkspaceDirectoryDescription`<sup>Required</sup> <a name="WorkspaceDirectoryDescription" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```go
func WorkspaceDirectoryDescription() *string
```

- *Type:* *string

---

##### `WorkspaceDirectoryName`<sup>Required</sup> <a name="WorkspaceDirectoryName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName"></a>

```go
func WorkspaceDirectoryName() *string
```

- *Type:* *string

---

##### `WorkspaceType`<sup>Required</sup> <a name="WorkspaceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceType"></a>

```go
func WorkspaceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryActiveDirectoryConfig <a name="WorkspacesDirectoryActiveDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryActiveDirectoryConfig {
	DomainName: *string,
	ServiceAccountSecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn">ServiceAccountSecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}.

---

##### `ServiceAccountSecretArn`<sup>Required</sup> <a name="ServiceAccountSecretArn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn"></a>

```go
ServiceAccountSecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}.

---

### WorkspacesDirectoryCertificateBasedAuthProperties <a name="WorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryCertificateBasedAuthProperties {
	CertificateAuthorityArn: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}. |

---

##### `CertificateAuthorityArn`<sup>Optional</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```go
CertificateAuthorityArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}.

---

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActiveDirectoryConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v21.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig,
	CertificateBasedAuthProperties: github.com/cdktf/cdktf-provider-aws-go/aws/v21.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties,
	DirectoryId: *string,
	Id: *string,
	IpGroupIds: *[]*string,
	Region: *string,
	SamlProperties: github.com/cdktf/cdktf-provider-aws-go/aws/v21.workspacesDirectory.WorkspacesDirectorySamlProperties,
	SelfServicePermissions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.workspacesDirectory.WorkspacesDirectorySelfServicePermissions,
	SubnetIds: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UserIdentityType: *string,
	WorkspaceAccessProperties: github.com/cdktf/cdktf-provider-aws-go/aws/v21.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties,
	WorkspaceCreationProperties: github.com/cdktf/cdktf-provider-aws-go/aws/v21.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties,
	WorkspaceDirectoryDescription: *string,
	WorkspaceDirectoryName: *string,
	WorkspaceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | active_directory_config block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | certificate_based_auth_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#directory_id WorkspacesDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#id WorkspacesDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">IpGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties">SamlProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | saml_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions">SelfServicePermissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | self_service_permissions block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#tags_all WorkspacesDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType">UserIdentityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | workspace_access_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | workspace_creation_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription">WorkspaceDirectoryDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName">WorkspaceDirectoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType">WorkspaceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveDirectoryConfig`<sup>Optional</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig"></a>

```go
ActiveDirectoryConfig WorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

active_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `CertificateBasedAuthProperties`<sup>Optional</sup> <a name="CertificateBasedAuthProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties"></a>

```go
CertificateBasedAuthProperties WorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

certificate_based_auth_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#directory_id WorkspacesDirectory#directory_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#id WorkspacesDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpGroupIds`<sup>Optional</sup> <a name="IpGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```go
IpGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#region WorkspacesDirectory#region}

---

##### `SamlProperties`<sup>Optional</sup> <a name="SamlProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties"></a>

```go
SamlProperties WorkspacesDirectorySamlProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

saml_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `SelfServicePermissions`<sup>Optional</sup> <a name="SelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions"></a>

```go
SelfServicePermissions WorkspacesDirectorySelfServicePermissions
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

self_service_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#tags_all WorkspacesDirectory#tags_all}.

---

##### `UserIdentityType`<sup>Optional</sup> <a name="UserIdentityType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType"></a>

```go
UserIdentityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}.

---

##### `WorkspaceAccessProperties`<sup>Optional</sup> <a name="WorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```go
WorkspaceAccessProperties WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

workspace_access_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `WorkspaceCreationProperties`<sup>Optional</sup> <a name="WorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```go
WorkspaceCreationProperties WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

workspace_creation_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `WorkspaceDirectoryDescription`<sup>Optional</sup> <a name="WorkspaceDirectoryDescription" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription"></a>

```go
WorkspaceDirectoryDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}.

---

##### `WorkspaceDirectoryName`<sup>Optional</sup> <a name="WorkspaceDirectoryName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName"></a>

```go
WorkspaceDirectoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}.

---

##### `WorkspaceType`<sup>Optional</sup> <a name="WorkspaceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType"></a>

```go
WorkspaceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}.

---

### WorkspacesDirectorySamlProperties <a name="WorkspacesDirectorySamlProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectorySamlProperties {
	RelayStateParameterName: *string,
	Status: *string,
	UserAccessUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName">RelayStateParameterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl">UserAccessUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}. |

---

##### `RelayStateParameterName`<sup>Optional</sup> <a name="RelayStateParameterName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName"></a>

```go
RelayStateParameterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}.

---

##### `UserAccessUrl`<sup>Optional</sup> <a name="UserAccessUrl" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl"></a>

```go
UserAccessUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}.

---

### WorkspacesDirectorySelfServicePermissions <a name="WorkspacesDirectorySelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectorySelfServicePermissions {
	ChangeComputeType: interface{},
	IncreaseVolumeSize: interface{},
	RebuildWorkspace: interface{},
	RestartWorkspace: interface{},
	SwitchRunningMode: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType">ChangeComputeType</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace">RestartWorkspace</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode">SwitchRunningMode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}. |

---

##### `ChangeComputeType`<sup>Optional</sup> <a name="ChangeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType"></a>

```go
ChangeComputeType interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}.

---

##### `IncreaseVolumeSize`<sup>Optional</sup> <a name="IncreaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize"></a>

```go
IncreaseVolumeSize interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}.

---

##### `RebuildWorkspace`<sup>Optional</sup> <a name="RebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace"></a>

```go
RebuildWorkspace interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}.

---

##### `RestartWorkspace`<sup>Optional</sup> <a name="RestartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace"></a>

```go
RestartWorkspace interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}.

---

##### `SwitchRunningMode`<sup>Optional</sup> <a name="SwitchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode"></a>

```go
SwitchRunningMode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}.

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryWorkspaceAccessProperties {
	DeviceTypeAndroid: *string,
	DeviceTypeChromeos: *string,
	DeviceTypeIos: *string,
	DeviceTypeLinux: *string,
	DeviceTypeOsx: *string,
	DeviceTypeWeb: *string,
	DeviceTypeWindows: *string,
	DeviceTypeZeroclient: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos">DeviceTypeChromeos</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient">DeviceTypeZeroclient</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}. |

---

##### `DeviceTypeAndroid`<sup>Optional</sup> <a name="DeviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```go
DeviceTypeAndroid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}.

---

##### `DeviceTypeChromeos`<sup>Optional</sup> <a name="DeviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos"></a>

```go
DeviceTypeChromeos *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}.

---

##### `DeviceTypeIos`<sup>Optional</sup> <a name="DeviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```go
DeviceTypeIos *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}.

---

##### `DeviceTypeLinux`<sup>Optional</sup> <a name="DeviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```go
DeviceTypeLinux *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}.

---

##### `DeviceTypeOsx`<sup>Optional</sup> <a name="DeviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```go
DeviceTypeOsx *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}.

---

##### `DeviceTypeWeb`<sup>Optional</sup> <a name="DeviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```go
DeviceTypeWeb *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}.

---

##### `DeviceTypeWindows`<sup>Optional</sup> <a name="DeviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```go
DeviceTypeWindows *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}.

---

##### `DeviceTypeZeroclient`<sup>Optional</sup> <a name="DeviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient"></a>

```go
DeviceTypeZeroclient *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}.

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryWorkspaceCreationProperties {
	CustomSecurityGroupId: *string,
	DefaultOu: *string,
	EnableInternetAccess: interface{},
	EnableMaintenanceMode: interface{},
	UserEnabledAsLocalAdministrator: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">DefaultOu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}. |

---

##### `CustomSecurityGroupId`<sup>Optional</sup> <a name="CustomSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```go
CustomSecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}.

---

##### `DefaultOu`<sup>Optional</sup> <a name="DefaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```go
DefaultOu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}.

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```go
EnableInternetAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}.

---

##### `EnableMaintenanceMode`<sup>Optional</sup> <a name="EnableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```go
EnableMaintenanceMode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}.

---

##### `UserEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```go
UserEnabledAsLocalAdministrator interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="WorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryActiveDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryActiveDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput">ServiceAccountSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">ServiceAccountSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `ServiceAccountSecretArnInput`<sup>Optional</sup> <a name="ServiceAccountSecretArnInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput"></a>

```go
func ServiceAccountSecretArnInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `ServiceAccountSecretArn`<sup>Required</sup> <a name="ServiceAccountSecretArn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```go
func ServiceAccountSecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---


### WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">ResetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityArn` <a name="ResetCertificateAuthorityArn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```go
func ResetCertificateAuthorityArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```go
func CertificateAuthorityArnInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### WorkspacesDirectorySamlPropertiesOutputReference <a name="WorkspacesDirectorySamlPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectorySamlPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectorySamlPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName">ResetRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl">ResetUserAccessUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelayStateParameterName` <a name="ResetRelayStateParameterName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName"></a>

```go
func ResetRelayStateParameterName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUserAccessUrl` <a name="ResetUserAccessUrl" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl"></a>

```go
func ResetUserAccessUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput">RelayStateParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput">UserAccessUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">RelayStateParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">UserAccessUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelayStateParameterNameInput`<sup>Optional</sup> <a name="RelayStateParameterNameInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput"></a>

```go
func RelayStateParameterNameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UserAccessUrlInput`<sup>Optional</sup> <a name="UserAccessUrlInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput"></a>

```go
func UserAccessUrlInput() *string
```

- *Type:* *string

---

##### `RelayStateParameterName`<sup>Required</sup> <a name="RelayStateParameterName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```go
func RelayStateParameterName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserAccessUrl`<sup>Required</sup> <a name="UserAccessUrl" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```go
func UserAccessUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesDirectorySamlProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---


### WorkspacesDirectorySelfServicePermissionsOutputReference <a name="WorkspacesDirectorySelfServicePermissionsOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectorySelfServicePermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectorySelfServicePermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeComputeType` <a name="ResetChangeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType"></a>

```go
func ResetChangeComputeType()
```

##### `ResetIncreaseVolumeSize` <a name="ResetIncreaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```go
func ResetIncreaseVolumeSize()
```

##### `ResetRebuildWorkspace` <a name="ResetRebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace"></a>

```go
func ResetRebuildWorkspace()
```

##### `ResetRestartWorkspace` <a name="ResetRestartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace"></a>

```go
func ResetRestartWorkspace()
```

##### `ResetSwitchRunningMode` <a name="ResetSwitchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode"></a>

```go
func ResetSwitchRunningMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput">ChangeComputeTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput">IncreaseVolumeSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput">RebuildWorkspaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput">RestartWorkspaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput">SwitchRunningModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType">ChangeComputeType</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace">RestartWorkspace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode">SwitchRunningMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeComputeTypeInput`<sup>Optional</sup> <a name="ChangeComputeTypeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```go
func ChangeComputeTypeInput() interface{}
```

- *Type:* interface{}

---

##### `IncreaseVolumeSizeInput`<sup>Optional</sup> <a name="IncreaseVolumeSizeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```go
func IncreaseVolumeSizeInput() interface{}
```

- *Type:* interface{}

---

##### `RebuildWorkspaceInput`<sup>Optional</sup> <a name="RebuildWorkspaceInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```go
func RebuildWorkspaceInput() interface{}
```

- *Type:* interface{}

---

##### `RestartWorkspaceInput`<sup>Optional</sup> <a name="RestartWorkspaceInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```go
func RestartWorkspaceInput() interface{}
```

- *Type:* interface{}

---

##### `SwitchRunningModeInput`<sup>Optional</sup> <a name="SwitchRunningModeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput"></a>

```go
func SwitchRunningModeInput() interface{}
```

- *Type:* interface{}

---

##### `ChangeComputeType`<sup>Required</sup> <a name="ChangeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType"></a>

```go
func ChangeComputeType() interface{}
```

- *Type:* interface{}

---

##### `IncreaseVolumeSize`<sup>Required</sup> <a name="IncreaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize"></a>

```go
func IncreaseVolumeSize() interface{}
```

- *Type:* interface{}

---

##### `RebuildWorkspace`<sup>Required</sup> <a name="RebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace"></a>

```go
func RebuildWorkspace() interface{}
```

- *Type:* interface{}

---

##### `RestartWorkspace`<sup>Required</sup> <a name="RestartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace"></a>

```go
func RestartWorkspace() interface{}
```

- *Type:* interface{}

---

##### `SwitchRunningMode`<sup>Required</sup> <a name="SwitchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode"></a>

```go
func SwitchRunningMode() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesDirectorySelfServicePermissions
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceTypeAndroid` <a name="ResetDeviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```go
func ResetDeviceTypeAndroid()
```

##### `ResetDeviceTypeChromeos` <a name="ResetDeviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos"></a>

```go
func ResetDeviceTypeChromeos()
```

##### `ResetDeviceTypeIos` <a name="ResetDeviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```go
func ResetDeviceTypeIos()
```

##### `ResetDeviceTypeLinux` <a name="ResetDeviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```go
func ResetDeviceTypeLinux()
```

##### `ResetDeviceTypeOsx` <a name="ResetDeviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```go
func ResetDeviceTypeOsx()
```

##### `ResetDeviceTypeWeb` <a name="ResetDeviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```go
func ResetDeviceTypeWeb()
```

##### `ResetDeviceTypeWindows` <a name="ResetDeviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```go
func ResetDeviceTypeWindows()
```

##### `ResetDeviceTypeZeroclient` <a name="ResetDeviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient"></a>

```go
func ResetDeviceTypeZeroclient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">DeviceTypeAndroidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput">DeviceTypeChromeosInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">DeviceTypeIosInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">DeviceTypeLinuxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">DeviceTypeOsxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">DeviceTypeWebInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">DeviceTypeWindowsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput">DeviceTypeZeroclientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos">DeviceTypeChromeos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient">DeviceTypeZeroclient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceTypeAndroidInput`<sup>Optional</sup> <a name="DeviceTypeAndroidInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```go
func DeviceTypeAndroidInput() *string
```

- *Type:* *string

---

##### `DeviceTypeChromeosInput`<sup>Optional</sup> <a name="DeviceTypeChromeosInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput"></a>

```go
func DeviceTypeChromeosInput() *string
```

- *Type:* *string

---

##### `DeviceTypeIosInput`<sup>Optional</sup> <a name="DeviceTypeIosInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```go
func DeviceTypeIosInput() *string
```

- *Type:* *string

---

##### `DeviceTypeLinuxInput`<sup>Optional</sup> <a name="DeviceTypeLinuxInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```go
func DeviceTypeLinuxInput() *string
```

- *Type:* *string

---

##### `DeviceTypeOsxInput`<sup>Optional</sup> <a name="DeviceTypeOsxInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```go
func DeviceTypeOsxInput() *string
```

- *Type:* *string

---

##### `DeviceTypeWebInput`<sup>Optional</sup> <a name="DeviceTypeWebInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```go
func DeviceTypeWebInput() *string
```

- *Type:* *string

---

##### `DeviceTypeWindowsInput`<sup>Optional</sup> <a name="DeviceTypeWindowsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```go
func DeviceTypeWindowsInput() *string
```

- *Type:* *string

---

##### `DeviceTypeZeroclientInput`<sup>Optional</sup> <a name="DeviceTypeZeroclientInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput"></a>

```go
func DeviceTypeZeroclientInput() *string
```

- *Type:* *string

---

##### `DeviceTypeAndroid`<sup>Required</sup> <a name="DeviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```go
func DeviceTypeAndroid() *string
```

- *Type:* *string

---

##### `DeviceTypeChromeos`<sup>Required</sup> <a name="DeviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos"></a>

```go
func DeviceTypeChromeos() *string
```

- *Type:* *string

---

##### `DeviceTypeIos`<sup>Required</sup> <a name="DeviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```go
func DeviceTypeIos() *string
```

- *Type:* *string

---

##### `DeviceTypeLinux`<sup>Required</sup> <a name="DeviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```go
func DeviceTypeLinux() *string
```

- *Type:* *string

---

##### `DeviceTypeOsx`<sup>Required</sup> <a name="DeviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```go
func DeviceTypeOsx() *string
```

- *Type:* *string

---

##### `DeviceTypeWeb`<sup>Required</sup> <a name="DeviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```go
func DeviceTypeWeb() *string
```

- *Type:* *string

---

##### `DeviceTypeWindows`<sup>Required</sup> <a name="DeviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```go
func DeviceTypeWindows() *string
```

- *Type:* *string

---

##### `DeviceTypeZeroclient`<sup>Required</sup> <a name="DeviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient"></a>

```go
func DeviceTypeZeroclient() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSecurityGroupId` <a name="ResetCustomSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```go
func ResetCustomSecurityGroupId()
```

##### `ResetDefaultOu` <a name="ResetDefaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```go
func ResetDefaultOu()
```

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```go
func ResetEnableInternetAccess()
```

##### `ResetEnableMaintenanceMode` <a name="ResetEnableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```go
func ResetEnableMaintenanceMode()
```

##### `ResetUserEnabledAsLocalAdministrator` <a name="ResetUserEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```go
func ResetUserEnabledAsLocalAdministrator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">CustomSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">DefaultOuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">EnableMaintenanceModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">UserEnabledAsLocalAdministratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">DefaultOu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIdInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```go
func CustomSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `DefaultOuInput`<sup>Optional</sup> <a name="DefaultOuInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```go
func DefaultOuInput() *string
```

- *Type:* *string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```go
func EnableInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `EnableMaintenanceModeInput`<sup>Optional</sup> <a name="EnableMaintenanceModeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```go
func EnableMaintenanceModeInput() interface{}
```

- *Type:* interface{}

---

##### `UserEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministratorInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```go
func UserEnabledAsLocalAdministratorInput() interface{}
```

- *Type:* interface{}

---

##### `CustomSecurityGroupId`<sup>Required</sup> <a name="CustomSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```go
func CustomSecurityGroupId() *string
```

- *Type:* *string

---

##### `DefaultOu`<sup>Required</sup> <a name="DefaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```go
func DefaultOu() *string
```

- *Type:* *string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```go
func EnableInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `EnableMaintenanceMode`<sup>Required</sup> <a name="EnableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```go
func EnableMaintenanceMode() interface{}
```

- *Type:* interface{}

---

##### `UserEnabledAsLocalAdministrator`<sup>Required</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```go
func UserEnabledAsLocalAdministrator() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



