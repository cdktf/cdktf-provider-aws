# `storagegatewayStoredIscsiVolume` Submodule <a name="`storagegatewayStoredIscsiVolume` Submodule" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayStoredIscsiVolume <a name="StoragegatewayStoredIscsiVolume" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume aws_storagegateway_stored_iscsi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaystorediscsivolume"

storagegatewaystorediscsivolume.NewStoragegatewayStoredIscsiVolume(scope Construct, id *string, config StoragegatewayStoredIscsiVolumeConfig) StoragegatewayStoredIscsiVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig">StoragegatewayStoredIscsiVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig">StoragegatewayStoredIscsiVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsEncrypted"></a>

```go
func ResetKmsEncrypted()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaystorediscsivolume"

storagegatewaystorediscsivolume.StoragegatewayStoredIscsiVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaystorediscsivolume"

storagegatewaystorediscsivolume.StoragegatewayStoredIscsiVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaystorediscsivolume"

storagegatewaystorediscsivolume.StoragegatewayStoredIscsiVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.chapEnabled">ChapEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lunNumber">LunNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfacePort">NetworkInterfacePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeAttachmentStatus">VolumeAttachmentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeStatus">VolumeStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskIdInput">DiskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingDataInput">PreserveExistingDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetNameInput">TargetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskId">DiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingData">PreserveExistingData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ChapEnabled`<sup>Required</sup> <a name="ChapEnabled" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.chapEnabled"></a>

```go
func ChapEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LunNumber`<sup>Required</sup> <a name="LunNumber" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lunNumber"></a>

```go
func LunNumber() *f64
```

- *Type:* *f64

---

##### `NetworkInterfacePort`<sup>Required</sup> <a name="NetworkInterfacePort" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfacePort"></a>

```go
func NetworkInterfacePort() *f64
```

- *Type:* *f64

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

##### `VolumeAttachmentStatus`<sup>Required</sup> <a name="VolumeAttachmentStatus" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeAttachmentStatus"></a>

```go
func VolumeAttachmentStatus() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeSizeInBytes"></a>

```go
func VolumeSizeInBytes() *f64
```

- *Type:* *f64

---

##### `VolumeStatus`<sup>Required</sup> <a name="VolumeStatus" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeStatus"></a>

```go
func VolumeStatus() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `DiskIdInput`<sup>Optional</sup> <a name="DiskIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskIdInput"></a>

```go
func DiskIdInput() *string
```

- *Type:* *string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncryptedInput"></a>

```go
func KmsEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `PreserveExistingDataInput`<sup>Optional</sup> <a name="PreserveExistingDataInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingDataInput"></a>

```go
func PreserveExistingDataInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetNameInput"></a>

```go
func TargetNameInput() *string
```

- *Type:* *string

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskId"></a>

```go
func DiskId() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncrypted"></a>

```go
func KmsEncrypted() interface{}
```

- *Type:* interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PreserveExistingData`<sup>Required</sup> <a name="PreserveExistingData" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingData"></a>

```go
func PreserveExistingData() interface{}
```

- *Type:* interface{}

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayStoredIscsiVolumeConfig <a name="StoragegatewayStoredIscsiVolumeConfig" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewaystorediscsivolume"

&storagegatewaystorediscsivolume.StoragegatewayStoredIscsiVolumeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DiskId: *string,
	GatewayArn: *string,
	NetworkInterfaceId: *string,
	PreserveExistingData: interface{},
	TargetName: *string,
	Id: *string,
	KmsEncrypted: interface{},
	KmsKey: *string,
	SnapshotId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.diskId">DiskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.preserveExistingData">PreserveExistingData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.targetName">TargetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.diskId"></a>

```go
DiskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}.

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}.

---

##### `PreserveExistingData`<sup>Required</sup> <a name="PreserveExistingData" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.preserveExistingData"></a>

```go
PreserveExistingData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}.

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.targetName"></a>

```go
TargetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsEncrypted"></a>

```go
KmsEncrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}.

---



