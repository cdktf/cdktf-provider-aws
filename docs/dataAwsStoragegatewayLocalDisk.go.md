# `dataAwsStoragegatewayLocalDisk` Submodule <a name="`dataAwsStoragegatewayLocalDisk` Submodule" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsStoragegatewayLocalDisk <a name="DataAwsStoragegatewayLocalDisk" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk aws_storagegateway_local_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsstoragegatewaylocaldisk"

dataawsstoragegatewaylocaldisk.NewDataAwsStoragegatewayLocalDisk(scope Construct, id *string, config DataAwsStoragegatewayLocalDiskConfig) DataAwsStoragegatewayLocalDisk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig">DataAwsStoragegatewayLocalDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig">DataAwsStoragegatewayLocalDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskNode">ResetDiskNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskPath">ResetDiskPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDiskNode` <a name="ResetDiskNode" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskNode"></a>

```go
func ResetDiskNode()
```

##### `ResetDiskPath` <a name="ResetDiskPath" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskPath"></a>

```go
func ResetDiskPath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsstoragegatewaylocaldisk"

dataawsstoragegatewaylocaldisk.DataAwsStoragegatewayLocalDisk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsstoragegatewaylocaldisk"

dataawsstoragegatewaylocaldisk.DataAwsStoragegatewayLocalDisk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsstoragegatewaylocaldisk"

dataawsstoragegatewaylocaldisk.DataAwsStoragegatewayLocalDisk_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskId">DiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNodeInput">DiskNodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPathInput">DiskPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNode">DiskNode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPath">DiskPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskId"></a>

```go
func DiskId() *string
```

- *Type:* *string

---

##### `DiskNodeInput`<sup>Optional</sup> <a name="DiskNodeInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNodeInput"></a>

```go
func DiskNodeInput() *string
```

- *Type:* *string

---

##### `DiskPathInput`<sup>Optional</sup> <a name="DiskPathInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPathInput"></a>

```go
func DiskPathInput() *string
```

- *Type:* *string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DiskNode`<sup>Required</sup> <a name="DiskNode" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNode"></a>

```go
func DiskNode() *string
```

- *Type:* *string

---

##### `DiskPath`<sup>Required</sup> <a name="DiskPath" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPath"></a>

```go
func DiskPath() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsStoragegatewayLocalDiskConfig <a name="DataAwsStoragegatewayLocalDiskConfig" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsstoragegatewaylocaldisk"

&dataawsstoragegatewaylocaldisk.DataAwsStoragegatewayLocalDiskConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayArn: *string,
	DiskNode: *string,
	DiskPath: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskNode">DiskNode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskPath">DiskPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}.

---

##### `DiskNode`<sup>Optional</sup> <a name="DiskNode" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskNode"></a>

```go
DiskNode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}.

---

##### `DiskPath`<sup>Optional</sup> <a name="DiskPath" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskPath"></a>

```go
DiskPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



