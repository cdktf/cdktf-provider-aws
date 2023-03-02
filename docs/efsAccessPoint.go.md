# `efsAccessPoint` Submodule <a name="`efsAccessPoint` Submodule" id="@cdktf/provider-aws.efsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsAccessPoint <a name="EfsAccessPoint" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point aws_efs_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

efsaccesspoint.NewEfsAccessPoint(scope Construct, id *string, config EfsAccessPointConfig) EfsAccessPoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig">EfsAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPosixUser` <a name="PutPosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser"></a>

```go
func PutPosixUser(value EfsAccessPointPosixUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `PutRootDirectory` <a name="PutRootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory"></a>

```go
func PutRootDirectory(value EfsAccessPointRootDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetId"></a>

```go
func ResetId()
```

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetPosixUser"></a>

```go
func ResetPosixUser()
```

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetRootDirectory"></a>

```go
func ResetRootDirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

efsaccesspoint.EfsAccessPoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

efsaccesspoint.EfsAccessPoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

efsaccesspoint.EfsAccessPoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemArn">FileSystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectory">RootDirectory</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUserInput">PosixUserInput</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FileSystemArn`<sup>Required</sup> <a name="FileSystemArn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemArn"></a>

```go
func FileSystemArn() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUser"></a>

```go
func PosixUser() EfsAccessPointPosixUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference">EfsAccessPointPosixUserOutputReference</a>

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectory"></a>

```go
func RootDirectory() EfsAccessPointRootDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference">EfsAccessPointRootDirectoryOutputReference</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.posixUserInput"></a>

```go
func PosixUserInput() EfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() EfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsAccessPointConfig <a name="EfsAccessPointConfig" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

&efsaccesspoint.EfsAccessPointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FileSystemId: *string,
	Id: *string,
	PosixUser: github.com/cdktf/cdktf-provider-aws-go/aws.efsAccessPoint.EfsAccessPointPosixUser,
	RootDirectory: github.com/cdktf/cdktf-provider-aws-go/aws.efsAccessPoint.EfsAccessPointRootDirectory,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | posix_user block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory">RootDirectory</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | root_directory block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#file_system_id EfsAccessPoint#file_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#id EfsAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.posixUser"></a>

```go
PosixUser EfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

posix_user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#posix_user EfsAccessPoint#posix_user}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.rootDirectory"></a>

```go
RootDirectory EfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

root_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#root_directory EfsAccessPoint#root_directory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags EfsAccessPoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#tags_all EfsAccessPoint#tags_all}.

---

### EfsAccessPointPosixUser <a name="EfsAccessPointPosixUser" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

&efsaccesspoint.EfsAccessPointPosixUser {
	Gid: *f64,
	Uid: *f64,
	SecondaryGids: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.gid">Gid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#gid EfsAccessPoint#gid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.uid">Uid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#uid EfsAccessPoint#uid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids">SecondaryGids</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}. |

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.gid"></a>

```go
Gid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#gid EfsAccessPoint#gid}.

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.uid"></a>

```go
Uid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#uid EfsAccessPoint#uid}.

---

##### `SecondaryGids`<sup>Optional</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser.property.secondaryGids"></a>

```go
SecondaryGids *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}.

---

### EfsAccessPointRootDirectory <a name="EfsAccessPointRootDirectory" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

&efsaccesspoint.EfsAccessPointRootDirectory {
	CreationInfo: github.com/cdktf/cdktf-provider-aws-go/aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo">CreationInfo</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | creation_info block. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#path EfsAccessPoint#path}. |

---

##### `CreationInfo`<sup>Optional</sup> <a name="CreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.creationInfo"></a>

```go
CreationInfo EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

creation_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#creation_info EfsAccessPoint#creation_info}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#path EfsAccessPoint#path}.

---

### EfsAccessPointRootDirectoryCreationInfo <a name="EfsAccessPointRootDirectoryCreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

&efsaccesspoint.EfsAccessPointRootDirectoryCreationInfo {
	OwnerGid: *f64,
	OwnerUid: *f64,
	Permissions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid">OwnerGid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_gid EfsAccessPoint#owner_gid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid">OwnerUid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_uid EfsAccessPoint#owner_uid}. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions">Permissions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#permissions EfsAccessPoint#permissions}. |

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerGid"></a>

```go
OwnerGid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_gid EfsAccessPoint#owner_gid}.

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.ownerUid"></a>

```go
OwnerUid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#owner_uid EfsAccessPoint#owner_uid}.

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point#permissions EfsAccessPoint#permissions}.

---

## Classes <a name="Classes" id="Classes"></a>

### EfsAccessPointPosixUserOutputReference <a name="EfsAccessPointPosixUserOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

efsaccesspoint.NewEfsAccessPointPosixUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsAccessPointPosixUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryGids` <a name="ResetSecondaryGids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```go
func ResetSecondaryGids()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput">GidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput">SecondaryGidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput">UidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid">Gid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid">Uid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gidInput"></a>

```go
func GidInput() *f64
```

- *Type:* *f64

---

##### `SecondaryGidsInput`<sup>Optional</sup> <a name="SecondaryGidsInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```go
func SecondaryGidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uidInput"></a>

```go
func UidInput() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.gid"></a>

```go
func Gid() *f64
```

- *Type:* *f64

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```go
func SecondaryGids() *[]*f64
```

- *Type:* *[]*f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.uid"></a>

```go
func Uid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUserOutputReference.property.internalValue"></a>

```go
func InternalValue() EfsAccessPointPosixUser
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointPosixUser">EfsAccessPointPosixUser</a>

---


### EfsAccessPointRootDirectoryCreationInfoOutputReference <a name="EfsAccessPointRootDirectoryCreationInfoOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

efsaccesspoint.NewEfsAccessPointRootDirectoryCreationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsAccessPointRootDirectoryCreationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput">OwnerGidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput">OwnerUidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid">OwnerGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid">OwnerUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OwnerGidInput`<sup>Optional</sup> <a name="OwnerGidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGidInput"></a>

```go
func OwnerGidInput() *f64
```

- *Type:* *f64

---

##### `OwnerUidInput`<sup>Optional</sup> <a name="OwnerUidInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUidInput"></a>

```go
func OwnerUidInput() *f64
```

- *Type:* *f64

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerGid"></a>

```go
func OwnerGid() *f64
```

- *Type:* *f64

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.ownerUid"></a>

```go
func OwnerUid() *f64
```

- *Type:* *f64

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---


### EfsAccessPointRootDirectoryOutputReference <a name="EfsAccessPointRootDirectoryOutputReference" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsaccesspoint"

efsaccesspoint.NewEfsAccessPointRootDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsAccessPointRootDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreationInfo` <a name="PutCreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo"></a>

```go
func PutCreationInfo(value EfsAccessPointRootDirectoryCreationInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.putCreationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `ResetCreationInfo` <a name="ResetCreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetCreationInfo"></a>

```go
func ResetCreationInfo()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo">CreationInfo</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput">CreationInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreationInfo`<sup>Required</sup> <a name="CreationInfo" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfo"></a>

```go
func CreationInfo() EfsAccessPointRootDirectoryCreationInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfoOutputReference">EfsAccessPointRootDirectoryCreationInfoOutputReference</a>

---

##### `CreationInfoInput`<sup>Optional</sup> <a name="CreationInfoInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.creationInfoInput"></a>

```go
func CreationInfoInput() EfsAccessPointRootDirectoryCreationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryCreationInfo">EfsAccessPointRootDirectoryCreationInfo</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() EfsAccessPointRootDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.efsAccessPoint.EfsAccessPointRootDirectory">EfsAccessPointRootDirectory</a>

---



