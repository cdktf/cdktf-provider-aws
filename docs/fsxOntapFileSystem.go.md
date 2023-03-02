# `fsxOntapFileSystem` Submodule <a name="`fsxOntapFileSystem` Submodule" id="@cdktf/provider-aws.fsxOntapFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapFileSystem <a name="FsxOntapFileSystem" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system aws_fsx_ontap_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystem(scope Construct, id *string, config FsxOntapFileSystemConfig) FsxOntapFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig">FsxOntapFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig">FsxOntapFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration">PutDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetAutomaticBackupRetentionDays">ResetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDailyAutomaticBackupStartTime">ResetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDiskIopsConfiguration">ResetDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetEndpointIpAddressRange">ResetEndpointIpAddressRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetFsxAdminPassword">ResetFsxAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetRouteTableIds">ResetRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetWeeklyMaintenanceStartTime">ResetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDiskIopsConfiguration` <a name="PutDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration"></a>

```go
func PutDiskIopsConfiguration(value FsxOntapFileSystemDiskIopsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts"></a>

```go
func PutTimeouts(value FsxOntapFileSystemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

---

##### `ResetAutomaticBackupRetentionDays` <a name="ResetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetAutomaticBackupRetentionDays"></a>

```go
func ResetAutomaticBackupRetentionDays()
```

##### `ResetDailyAutomaticBackupStartTime` <a name="ResetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDailyAutomaticBackupStartTime"></a>

```go
func ResetDailyAutomaticBackupStartTime()
```

##### `ResetDiskIopsConfiguration` <a name="ResetDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDiskIopsConfiguration"></a>

```go
func ResetDiskIopsConfiguration()
```

##### `ResetEndpointIpAddressRange` <a name="ResetEndpointIpAddressRange" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetEndpointIpAddressRange"></a>

```go
func ResetEndpointIpAddressRange()
```

##### `ResetFsxAdminPassword` <a name="ResetFsxAdminPassword" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetFsxAdminPassword"></a>

```go
func ResetFsxAdminPassword()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetRouteTableIds` <a name="ResetRouteTableIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetRouteTableIds"></a>

```go
func ResetRouteTableIds()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageCapacity"></a>

```go
func ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetWeeklyMaintenanceStartTime"></a>

```go
func ResetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.FsxOntapFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.FsxOntapFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.FsxOntapFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfiguration">DiskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference">FsxOntapFileSystemDiskIopsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList">FsxOntapFileSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference">FsxOntapFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDaysInput">AutomaticBackupRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTimeInput">DailyAutomaticBackupStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfigurationInput">DiskIopsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRangeInput">EndpointIpAddressRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPasswordInput">FsxAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetIdInput">PreferredSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIdsInput">RouteTableIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacityInput">ThroughputCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRange">EndpointIpAddressRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPassword">FsxAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacity">ThroughputCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DiskIopsConfiguration`<sup>Required</sup> <a name="DiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfiguration"></a>

```go
func DiskIopsConfiguration() FsxOntapFileSystemDiskIopsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference">FsxOntapFileSystemDiskIopsConfigurationOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpoints"></a>

```go
func Endpoints() FsxOntapFileSystemEndpointsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList">FsxOntapFileSystemEndpointsList</a>

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeouts"></a>

```go
func Timeouts() FsxOntapFileSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference">FsxOntapFileSystemTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `AutomaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDaysInput"></a>

```go
func AutomaticBackupRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `DailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```go
func DailyAutomaticBackupStartTimeInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DiskIopsConfigurationInput`<sup>Optional</sup> <a name="DiskIopsConfigurationInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfigurationInput"></a>

```go
func DiskIopsConfigurationInput() FsxOntapFileSystemDiskIopsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---

##### `EndpointIpAddressRangeInput`<sup>Optional</sup> <a name="EndpointIpAddressRangeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRangeInput"></a>

```go
func EndpointIpAddressRangeInput() *string
```

- *Type:* *string

---

##### `FsxAdminPasswordInput`<sup>Optional</sup> <a name="FsxAdminPasswordInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPasswordInput"></a>

```go
func FsxAdminPasswordInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PreferredSubnetIdInput`<sup>Optional</sup> <a name="PreferredSubnetIdInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetIdInput"></a>

```go
func PreferredSubnetIdInput() *string
```

- *Type:* *string

---

##### `RouteTableIdsInput`<sup>Optional</sup> <a name="RouteTableIdsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIdsInput"></a>

```go
func RouteTableIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacityInput"></a>

```go
func StorageCapacityInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputCapacityInput`<sup>Optional</sup> <a name="ThroughputCapacityInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacityInput"></a>

```go
func ThroughputCapacityInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```go
func WeeklyMaintenanceStartTimeInput() *string
```

- *Type:* *string

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDays"></a>

```go
func AutomaticBackupRetentionDays() *f64
```

- *Type:* *f64

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTime"></a>

```go
func DailyAutomaticBackupStartTime() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `EndpointIpAddressRange`<sup>Required</sup> <a name="EndpointIpAddressRange" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRange"></a>

```go
func EndpointIpAddressRange() *string
```

- *Type:* *string

---

##### `FsxAdminPassword`<sup>Required</sup> <a name="FsxAdminPassword" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPassword"></a>

```go
func FsxAdminPassword() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetId"></a>

```go
func PreferredSubnetId() *string
```

- *Type:* *string

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIds"></a>

```go
func RouteTableIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacity"></a>

```go
func StorageCapacity() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacity"></a>

```go
func ThroughputCapacity() *f64
```

- *Type:* *f64

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTime"></a>

```go
func WeeklyMaintenanceStartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapFileSystemConfig <a name="FsxOntapFileSystemConfig" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

&fsxontapfilesystem.FsxOntapFileSystemConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentType: *string,
	PreferredSubnetId: *string,
	SubnetIds: *[]*string,
	ThroughputCapacity: *f64,
	AutomaticBackupRetentionDays: *f64,
	DailyAutomaticBackupStartTime: *string,
	DiskIopsConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration,
	EndpointIpAddressRange: *string,
	FsxAdminPassword: *string,
	Id: *string,
	KmsKeyId: *string,
	RouteTableIds: *[]*string,
	SecurityGroupIds: *[]*string,
	StorageCapacity: *f64,
	StorageType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts,
	WeeklyMaintenanceStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.throughputCapacity">ThroughputCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.diskIopsConfiguration">DiskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | disk_iops_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.endpointIpAddressRange">EndpointIpAddressRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.fsxAdminPassword">FsxAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#id FsxOntapFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.routeTableIds">RouteTableIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}.

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.preferredSubnetId"></a>

```go
PreferredSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}.

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.throughputCapacity"></a>

```go
ThroughputCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}.

---

##### `AutomaticBackupRetentionDays`<sup>Optional</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.automaticBackupRetentionDays"></a>

```go
AutomaticBackupRetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}.

---

##### `DailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```go
DailyAutomaticBackupStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}.

---

##### `DiskIopsConfiguration`<sup>Optional</sup> <a name="DiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.diskIopsConfiguration"></a>

```go
DiskIopsConfiguration FsxOntapFileSystemDiskIopsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

disk_iops_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}

---

##### `EndpointIpAddressRange`<sup>Optional</sup> <a name="EndpointIpAddressRange" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.endpointIpAddressRange"></a>

```go
EndpointIpAddressRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}.

---

##### `FsxAdminPassword`<sup>Optional</sup> <a name="FsxAdminPassword" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.fsxAdminPassword"></a>

```go
FsxAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#id FsxOntapFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}.

---

##### `RouteTableIds`<sup>Optional</sup> <a name="RouteTableIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.routeTableIds"></a>

```go
RouteTableIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageCapacity"></a>

```go
StorageCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.timeouts"></a>

```go
Timeouts FsxOntapFileSystemTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#timeouts FsxOntapFileSystem#timeouts}

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```go
WeeklyMaintenanceStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}.

---

### FsxOntapFileSystemDiskIopsConfiguration <a name="FsxOntapFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

&fsxontapfilesystem.FsxOntapFileSystemDiskIopsConfiguration {
	Iops: *f64,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}.

---

### FsxOntapFileSystemEndpoints <a name="FsxOntapFileSystemEndpoints" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

&fsxontapfilesystem.FsxOntapFileSystemEndpoints {

}
```


### FsxOntapFileSystemEndpointsIntercluster <a name="FsxOntapFileSystemEndpointsIntercluster" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

&fsxontapfilesystem.FsxOntapFileSystemEndpointsIntercluster {

}
```


### FsxOntapFileSystemEndpointsManagement <a name="FsxOntapFileSystemEndpointsManagement" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

&fsxontapfilesystem.FsxOntapFileSystemEndpointsManagement {

}
```


### FsxOntapFileSystemTimeouts <a name="FsxOntapFileSystemTimeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

&fsxontapfilesystem.FsxOntapFileSystemTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#create FsxOntapFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#update FsxOntapFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#create FsxOntapFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#update FsxOntapFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapFileSystemDiskIopsConfigurationOutputReference <a name="FsxOntapFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemDiskIopsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapFileSystemDiskIopsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapFileSystemDiskIopsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---


### FsxOntapFileSystemEndpointsInterclusterList <a name="FsxOntapFileSystemEndpointsInterclusterList" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemEndpointsInterclusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapFileSystemEndpointsInterclusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get"></a>

```go
func Get(index *f64) FsxOntapFileSystemEndpointsInterclusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapFileSystemEndpointsInterclusterOutputReference <a name="FsxOntapFileSystemEndpointsInterclusterOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemEndpointsInterclusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapFileSystemEndpointsInterclusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster">FsxOntapFileSystemEndpointsIntercluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapFileSystemEndpointsIntercluster
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster">FsxOntapFileSystemEndpointsIntercluster</a>

---


### FsxOntapFileSystemEndpointsList <a name="FsxOntapFileSystemEndpointsList" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapFileSystemEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get"></a>

```go
func Get(index *f64) FsxOntapFileSystemEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapFileSystemEndpointsManagementList <a name="FsxOntapFileSystemEndpointsManagementList" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemEndpointsManagementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapFileSystemEndpointsManagementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get"></a>

```go
func Get(index *f64) FsxOntapFileSystemEndpointsManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapFileSystemEndpointsManagementOutputReference <a name="FsxOntapFileSystemEndpointsManagementOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemEndpointsManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapFileSystemEndpointsManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement">FsxOntapFileSystemEndpointsManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapFileSystemEndpointsManagement
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement">FsxOntapFileSystemEndpointsManagement</a>

---


### FsxOntapFileSystemEndpointsOutputReference <a name="FsxOntapFileSystemEndpointsOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapFileSystemEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.intercluster">Intercluster</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList">FsxOntapFileSystemEndpointsInterclusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.management">Management</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList">FsxOntapFileSystemEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints">FsxOntapFileSystemEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Intercluster`<sup>Required</sup> <a name="Intercluster" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.intercluster"></a>

```go
func Intercluster() FsxOntapFileSystemEndpointsInterclusterList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList">FsxOntapFileSystemEndpointsInterclusterList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.management"></a>

```go
func Management() FsxOntapFileSystemEndpointsManagementList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList">FsxOntapFileSystemEndpointsManagementList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapFileSystemEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints">FsxOntapFileSystemEndpoints</a>

---


### FsxOntapFileSystemTimeoutsOutputReference <a name="FsxOntapFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapfilesystem"

fsxontapfilesystem.NewFsxOntapFileSystemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapFileSystemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



