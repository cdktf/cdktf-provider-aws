# `transferUser` Submodule <a name="`transferUser` Submodule" id="@cdktf/provider-aws.transferUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferUser <a name="TransferUser" id="@cdktf/provider-aws.transferUser.TransferUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user aws_transfer_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferUser.TransferUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

transferuser.NewTransferUser(scope Construct, id *string, config TransferUserConfig) TransferUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig">TransferUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferUser.TransferUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferUser.TransferUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transferUser.TransferUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferUser.TransferUserConfig">TransferUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.putHomeDirectoryMappings">PutHomeDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.putPosixProfile">PutPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetHomeDirectory">ResetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetHomeDirectoryMappings">ResetHomeDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetHomeDirectoryType">ResetHomeDirectoryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetPosixProfile">ResetPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferUser.TransferUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferUser.TransferUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferUser.TransferUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferUser.TransferUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferUser.TransferUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferUser.TransferUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferUser.TransferUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferUser.TransferUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferUser.TransferUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHomeDirectoryMappings` <a name="PutHomeDirectoryMappings" id="@cdktf/provider-aws.transferUser.TransferUser.putHomeDirectoryMappings"></a>

```go
func PutHomeDirectoryMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferUser.TransferUser.putHomeDirectoryMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPosixProfile` <a name="PutPosixProfile" id="@cdktf/provider-aws.transferUser.TransferUser.putPosixProfile"></a>

```go
func PutPosixProfile(value TransferUserPosixProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferUser.TransferUser.putPosixProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

---

##### `ResetHomeDirectory` <a name="ResetHomeDirectory" id="@cdktf/provider-aws.transferUser.TransferUser.resetHomeDirectory"></a>

```go
func ResetHomeDirectory()
```

##### `ResetHomeDirectoryMappings` <a name="ResetHomeDirectoryMappings" id="@cdktf/provider-aws.transferUser.TransferUser.resetHomeDirectoryMappings"></a>

```go
func ResetHomeDirectoryMappings()
```

##### `ResetHomeDirectoryType` <a name="ResetHomeDirectoryType" id="@cdktf/provider-aws.transferUser.TransferUser.resetHomeDirectoryType"></a>

```go
func ResetHomeDirectoryType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transferUser.TransferUser.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.transferUser.TransferUser.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetPosixProfile` <a name="ResetPosixProfile" id="@cdktf/provider-aws.transferUser.TransferUser.resetPosixProfile"></a>

```go
func ResetPosixProfile()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferUser.TransferUser.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transferUser.TransferUser.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferUser.TransferUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

transferuser.TransferUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferUser.TransferUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferUser.TransferUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

transferuser.TransferUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferUser.TransferUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferUser.TransferUser.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

transferuser.TransferUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferUser.TransferUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryMappings">HomeDirectoryMappings</a></code> | <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList">TransferUserHomeDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.posixProfile">PosixProfile</a></code> | <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference">TransferUserPosixProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryInput">HomeDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryMappingsInput">HomeDirectoryMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryTypeInput">HomeDirectoryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.posixProfileInput">PosixProfileInput</a></code> | <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectory">HomeDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryType">HomeDirectoryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferUser.TransferUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferUser.TransferUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferUser.TransferUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferUser.TransferUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferUser.TransferUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferUser.TransferUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferUser.TransferUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferUser.TransferUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferUser.TransferUser.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferUser.TransferUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferUser.TransferUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferUser.TransferUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferUser.TransferUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferUser.TransferUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transferUser.TransferUser.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HomeDirectoryMappings`<sup>Required</sup> <a name="HomeDirectoryMappings" id="@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryMappings"></a>

```go
func HomeDirectoryMappings() TransferUserHomeDirectoryMappingsList
```

- *Type:* <a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList">TransferUserHomeDirectoryMappingsList</a>

---

##### `PosixProfile`<sup>Required</sup> <a name="PosixProfile" id="@cdktf/provider-aws.transferUser.TransferUser.property.posixProfile"></a>

```go
func PosixProfile() TransferUserPosixProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference">TransferUserPosixProfileOutputReference</a>

---

##### `HomeDirectoryInput`<sup>Optional</sup> <a name="HomeDirectoryInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryInput"></a>

```go
func HomeDirectoryInput() *string
```

- *Type:* *string

---

##### `HomeDirectoryMappingsInput`<sup>Optional</sup> <a name="HomeDirectoryMappingsInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryMappingsInput"></a>

```go
func HomeDirectoryMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `HomeDirectoryTypeInput`<sup>Optional</sup> <a name="HomeDirectoryTypeInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryTypeInput"></a>

```go
func HomeDirectoryTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `PosixProfileInput`<sup>Optional</sup> <a name="PosixProfileInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.posixProfileInput"></a>

```go
func PosixProfileInput() TransferUserPosixProfile
```

- *Type:* <a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-aws.transferUser.TransferUser.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectory"></a>

```go
func HomeDirectory() *string
```

- *Type:* *string

---

##### `HomeDirectoryType`<sup>Required</sup> <a name="HomeDirectoryType" id="@cdktf/provider-aws.transferUser.TransferUser.property.homeDirectoryType"></a>

```go
func HomeDirectoryType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferUser.TransferUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.transferUser.TransferUser.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.transferUser.TransferUser.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-aws.transferUser.TransferUser.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferUser.TransferUser.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferUser.TransferUser.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.transferUser.TransferUser.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferUser.TransferUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferUserConfig <a name="TransferUserConfig" id="@cdktf/provider-aws.transferUser.TransferUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferUser.TransferUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

&transferuser.TransferUserConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Role: *string,
	ServerId: *string,
	UserName: *string,
	HomeDirectory: *string,
	HomeDirectoryMappings: interface{},
	HomeDirectoryType: *string,
	Id: *string,
	Policy: *string,
	PosixProfile: github.com/cdktf/cdktf-provider-aws-go/aws.transferUser.TransferUserPosixProfile,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#role TransferUser#role}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#server_id TransferUser#server_id}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#user_name TransferUser#user_name}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.homeDirectory">HomeDirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory TransferUser#home_directory}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.homeDirectoryMappings">HomeDirectoryMappings</a></code> | <code>interface{}</code> | home_directory_mappings block. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.homeDirectoryType">HomeDirectoryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory_type TransferUser#home_directory_type}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#id TransferUser#id}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#policy TransferUser#policy}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.posixProfile">PosixProfile</a></code> | <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a></code> | posix_profile block. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#tags TransferUser#tags}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#tags_all TransferUser#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#role TransferUser#role}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#server_id TransferUser#server_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#user_name TransferUser#user_name}.

---

##### `HomeDirectory`<sup>Optional</sup> <a name="HomeDirectory" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.homeDirectory"></a>

```go
HomeDirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory TransferUser#home_directory}.

---

##### `HomeDirectoryMappings`<sup>Optional</sup> <a name="HomeDirectoryMappings" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.homeDirectoryMappings"></a>

```go
HomeDirectoryMappings interface{}
```

- *Type:* interface{}

home_directory_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory_mappings TransferUser#home_directory_mappings}

---

##### `HomeDirectoryType`<sup>Optional</sup> <a name="HomeDirectoryType" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.homeDirectoryType"></a>

```go
HomeDirectoryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#home_directory_type TransferUser#home_directory_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#id TransferUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#policy TransferUser#policy}.

---

##### `PosixProfile`<sup>Optional</sup> <a name="PosixProfile" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.posixProfile"></a>

```go
PosixProfile TransferUserPosixProfile
```

- *Type:* <a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

posix_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#posix_profile TransferUser#posix_profile}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#tags TransferUser#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferUser.TransferUserConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#tags_all TransferUser#tags_all}.

---

### TransferUserHomeDirectoryMappings <a name="TransferUserHomeDirectoryMappings" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

&transferuser.TransferUserHomeDirectoryMappings {
	Entry: *string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappings.property.entry">Entry</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#entry TransferUser#entry}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappings.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#target TransferUser#target}. |

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappings.property.entry"></a>

```go
Entry *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#entry TransferUser#entry}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappings.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#target TransferUser#target}.

---

### TransferUserPosixProfile <a name="TransferUserPosixProfile" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

&transferuser.TransferUserPosixProfile {
	Gid: *f64,
	Uid: *f64,
	SecondaryGids: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile.property.gid">Gid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#gid TransferUser#gid}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile.property.uid">Uid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#uid TransferUser#uid}. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile.property.secondaryGids">SecondaryGids</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#secondary_gids TransferUser#secondary_gids}. |

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfile.property.gid"></a>

```go
Gid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#gid TransferUser#gid}.

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfile.property.uid"></a>

```go
Uid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#uid TransferUser#uid}.

---

##### `SecondaryGids`<sup>Optional</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfile.property.secondaryGids"></a>

```go
SecondaryGids *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_user#secondary_gids TransferUser#secondary_gids}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferUserHomeDirectoryMappingsList <a name="TransferUserHomeDirectoryMappingsList" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

transferuser.NewTransferUserHomeDirectoryMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TransferUserHomeDirectoryMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.get"></a>

```go
func Get(index *f64) TransferUserHomeDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TransferUserHomeDirectoryMappingsOutputReference <a name="TransferUserHomeDirectoryMappingsOutputReference" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

transferuser.NewTransferUserHomeDirectoryMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TransferUserHomeDirectoryMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entryInput">EntryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entry">Entry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entryInput"></a>

```go
func EntryInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entry"></a>

```go
func Entry() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TransferUserPosixProfileOutputReference <a name="TransferUserPosixProfileOutputReference" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/transferuser"

transferuser.NewTransferUserPosixProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TransferUserPosixProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.resetSecondaryGids">ResetSecondaryGids</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryGids` <a name="ResetSecondaryGids" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.resetSecondaryGids"></a>

```go
func ResetSecondaryGids()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.gidInput">GidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGidsInput">SecondaryGidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.uidInput">UidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.gid">Gid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.uid">Uid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.gidInput"></a>

```go
func GidInput() *f64
```

- *Type:* *f64

---

##### `SecondaryGidsInput`<sup>Optional</sup> <a name="SecondaryGidsInput" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGidsInput"></a>

```go
func SecondaryGidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.uidInput"></a>

```go
func UidInput() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.gid"></a>

```go
func Gid() *f64
```

- *Type:* *f64

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGids"></a>

```go
func SecondaryGids() *[]*f64
```

- *Type:* *[]*f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.uid"></a>

```go
func Uid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferUser.TransferUserPosixProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() TransferUserPosixProfile
```

- *Type:* <a href="#@cdktf/provider-aws.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

---



