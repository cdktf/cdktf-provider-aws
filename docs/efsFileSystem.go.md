# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktf/provider-aws.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system aws_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.NewEfsFileSystem(scope Construct, id *string, config EfsFileSystemConfig) EfsFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy">PutLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken">ResetCreationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy">ResetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode">ResetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">ResetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLifecyclePolicy` <a name="PutLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy"></a>

```go
func PutLifecyclePolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```go
func ResetAvailabilityZoneName()
```

##### `ResetCreationToken` <a name="ResetCreationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken"></a>

```go
func ResetCreationToken()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLifecyclePolicy` <a name="ResetLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy"></a>

```go
func ResetLifecyclePolicy()
```

##### `ResetPerformanceMode` <a name="ResetPerformanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```go
func ResetPerformanceMode()
```

##### `ResetProvisionedThroughputInMibps` <a name="ResetProvisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```go
func ResetProvisionedThroughputInMibps()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```go
func ResetThroughputMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.EfsFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.EfsFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.EfsFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets">NumberOfMountTargets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes">SizeInBytes</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput">CreationTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput">LifecyclePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput">PerformanceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">ProvisionedThroughputInMibpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput">ThroughputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken">CreationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode">PerformanceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy"></a>

```go
func LifecyclePolicy() EfsFileSystemLifecyclePolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a>

---

##### `NumberOfMountTargets`<sup>Required</sup> <a name="NumberOfMountTargets" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets"></a>

```go
func NumberOfMountTargets() *f64
```

- *Type:* *f64

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes"></a>

```go
func SizeInBytes() EfsFileSystemSizeInBytesList
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a>

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```go
func AvailabilityZoneNameInput() *string
```

- *Type:* *string

---

##### `CreationTokenInput`<sup>Optional</sup> <a name="CreationTokenInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput"></a>

```go
func CreationTokenInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LifecyclePolicyInput`<sup>Optional</sup> <a name="LifecyclePolicyInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput"></a>

```go
func LifecyclePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceModeInput`<sup>Optional</sup> <a name="PerformanceModeInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```go
func PerformanceModeInput() *string
```

- *Type:* *string

---

##### `ProvisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="ProvisionedThroughputInMibpsInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```go
func ProvisionedThroughputInMibpsInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```go
func ThroughputModeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `CreationToken`<sup>Required</sup> <a name="CreationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken"></a>

```go
func CreationToken() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PerformanceMode`<sup>Required</sup> <a name="PerformanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```go
func PerformanceMode() *string
```

- *Type:* *string

---

##### `ProvisionedThroughputInMibps`<sup>Required</sup> <a name="ProvisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```go
func ProvisionedThroughputInMibps() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```go
func ThroughputMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

&efsfilesystem.EfsFileSystemConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZoneName: *string,
	CreationToken: *string,
	Encrypted: interface{},
	Id: *string,
	KmsKeyId: *string,
	LifecyclePolicy: interface{},
	PerformanceMode: *string,
	ProvisionedThroughputInMibps: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	ThroughputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken">CreationToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#creation_token EfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#encrypted EfsFileSystem#encrypted}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#id EfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>interface{}</code> | lifecycle_policy block. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode">PerformanceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#performance_mode EfsFileSystem#performance_mode}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags EfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags_all EfsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```go
AvailabilityZoneName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}.

---

##### `CreationToken`<sup>Optional</sup> <a name="CreationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken"></a>

```go
CreationToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#creation_token EfsFileSystem#creation_token}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#encrypted EfsFileSystem#encrypted}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#id EfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}.

---

##### `LifecyclePolicy`<sup>Optional</sup> <a name="LifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy"></a>

```go
LifecyclePolicy interface{}
```

- *Type:* interface{}

lifecycle_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#lifecycle_policy EfsFileSystem#lifecycle_policy}

---

##### `PerformanceMode`<sup>Optional</sup> <a name="PerformanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```go
PerformanceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#performance_mode EfsFileSystem#performance_mode}.

---

##### `ProvisionedThroughputInMibps`<sup>Optional</sup> <a name="ProvisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```go
ProvisionedThroughputInMibps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags EfsFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags_all EfsFileSystem#tags_all}.

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```go
ThroughputMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}.

---

### EfsFileSystemLifecyclePolicy <a name="EfsFileSystemLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

&efsfilesystem.EfsFileSystemLifecyclePolicy {
	TransitionToIa: *string,
	TransitionToPrimaryStorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa">TransitionToIa</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}. |

---

##### `TransitionToIa`<sup>Optional</sup> <a name="TransitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa"></a>

```go
TransitionToIa *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}.

---

##### `TransitionToPrimaryStorageClass`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass"></a>

```go
TransitionToPrimaryStorageClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}.

---

### EfsFileSystemSizeInBytes <a name="EfsFileSystemSizeInBytes" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

&efsfilesystem.EfsFileSystemSizeInBytes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemLifecyclePolicyList <a name="EfsFileSystemLifecyclePolicyList" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.NewEfsFileSystemLifecyclePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EfsFileSystemLifecyclePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get"></a>

```go
func Get(index *f64) EfsFileSystemLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemLifecyclePolicyOutputReference <a name="EfsFileSystemLifecyclePolicyOutputReference" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.NewEfsFileSystemLifecyclePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EfsFileSystemLifecyclePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa">ResetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass">ResetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransitionToIa` <a name="ResetTransitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa"></a>

```go
func ResetTransitionToIa()
```

##### `ResetTransitionToPrimaryStorageClass` <a name="ResetTransitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass"></a>

```go
func ResetTransitionToPrimaryStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput">TransitionToIaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput">TransitionToPrimaryStorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa">TransitionToIa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransitionToIaInput`<sup>Optional</sup> <a name="TransitionToIaInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput"></a>

```go
func TransitionToIaInput() *string
```

- *Type:* *string

---

##### `TransitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClassInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```go
func TransitionToPrimaryStorageClassInput() *string
```

- *Type:* *string

---

##### `TransitionToIa`<sup>Required</sup> <a name="TransitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa"></a>

```go
func TransitionToIa() *string
```

- *Type:* *string

---

##### `TransitionToPrimaryStorageClass`<sup>Required</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass"></a>

```go
func TransitionToPrimaryStorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EfsFileSystemSizeInBytesList <a name="EfsFileSystemSizeInBytesList" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.NewEfsFileSystemSizeInBytesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EfsFileSystemSizeInBytesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get"></a>

```go
func Get(index *f64) EfsFileSystemSizeInBytesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EfsFileSystemSizeInBytesOutputReference <a name="EfsFileSystemSizeInBytesOutputReference" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsfilesystem"

efsfilesystem.NewEfsFileSystemSizeInBytesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EfsFileSystemSizeInBytesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa">ValueInIa</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard">ValueInStandard</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `ValueInIa`<sup>Required</sup> <a name="ValueInIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa"></a>

```go
func ValueInIa() *f64
```

- *Type:* *f64

---

##### `ValueInStandard`<sup>Required</sup> <a name="ValueInStandard" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard"></a>

```go
func ValueInStandard() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue"></a>

```go
func InternalValue() EfsFileSystemSizeInBytes
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a>

---



