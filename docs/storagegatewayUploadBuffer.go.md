# `storagegatewayUploadBuffer` Submodule <a name="`storagegatewayUploadBuffer` Submodule" id="@cdktf/provider-aws.storagegatewayUploadBuffer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayUploadBuffer <a name="StoragegatewayUploadBuffer" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer aws_storagegateway_upload_buffer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewayuploadbuffer"

storagegatewayuploadbuffer.NewStoragegatewayUploadBuffer(scope Construct, id *string, config StoragegatewayUploadBufferConfig) StoragegatewayUploadBuffer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig">StoragegatewayUploadBufferConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig">StoragegatewayUploadBufferConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskId">ResetDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskPath">ResetDiskPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDiskId` <a name="ResetDiskId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskId"></a>

```go
func ResetDiskId()
```

##### `ResetDiskPath` <a name="ResetDiskPath" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetDiskPath"></a>

```go
func ResetDiskPath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewayuploadbuffer"

storagegatewayuploadbuffer.StoragegatewayUploadBuffer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewayuploadbuffer"

storagegatewayuploadbuffer.StoragegatewayUploadBuffer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewayuploadbuffer"

storagegatewayuploadbuffer.StoragegatewayUploadBuffer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskIdInput">DiskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPathInput">DiskPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskId">DiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPath">DiskPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiskIdInput`<sup>Optional</sup> <a name="DiskIdInput" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskIdInput"></a>

```go
func DiskIdInput() *string
```

- *Type:* *string

---

##### `DiskPathInput`<sup>Optional</sup> <a name="DiskPathInput" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPathInput"></a>

```go
func DiskPathInput() *string
```

- *Type:* *string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskId"></a>

```go
func DiskId() *string
```

- *Type:* *string

---

##### `DiskPath`<sup>Required</sup> <a name="DiskPath" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.diskPath"></a>

```go
func DiskPath() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBuffer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayUploadBufferConfig <a name="StoragegatewayUploadBufferConfig" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/storagegatewayuploadbuffer"

&storagegatewayuploadbuffer.StoragegatewayUploadBufferConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayArn: *string,
	DiskId: *string,
	DiskPath: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#gateway_arn StoragegatewayUploadBuffer#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskId">DiskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#disk_id StoragegatewayUploadBuffer#disk_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskPath">DiskPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#disk_path StoragegatewayUploadBuffer#disk_path}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#id StoragegatewayUploadBuffer#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#gateway_arn StoragegatewayUploadBuffer#gateway_arn}.

---

##### `DiskId`<sup>Optional</sup> <a name="DiskId" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskId"></a>

```go
DiskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#disk_id StoragegatewayUploadBuffer#disk_id}.

---

##### `DiskPath`<sup>Optional</sup> <a name="DiskPath" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.diskPath"></a>

```go
DiskPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#disk_path StoragegatewayUploadBuffer#disk_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayUploadBuffer.StoragegatewayUploadBufferConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer#id StoragegatewayUploadBuffer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



